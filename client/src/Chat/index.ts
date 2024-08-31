const mapUser = (user: any) => ({
    _id: user.name,
    username: user.displayName,
    avatar: user.displayPicturesUrl,
    status: {
        state: user.presence.online ? 'online' : 'offline'
    },
    _user: user
})

const mapMessage = (message: any, timeFormat?: string) => ({
    _id: message.id,
    content: message.type === 'TEXT' || message.type === 'SYSTEM_TEXT' ? message.body : undefined,
    senderId: message.type === 'TEXT' || message.type === 'FILE' ? message.user.name : 'system',
    username:
      message.type === 'TEXT' || message.type === 'FILE' ? message.user.displayName : 'System',
    timestamp: parseTimestamp(message.createdTime, timeFormat || 'HH:mm'),
    date: parseTimestamp(message.createdTime, 'DD MMMM YYYY'),
    _message: message
  })

function parseTimestamp(createdTime: any, arg1: string) {
    throw new Error("Function not implemented.")
}

const mapCannel = async (user: any, channel: any) => ({
    roomId: channel.id,
    roomName:
    channel.type === 'DIRECT'
    ? channel.members
    .filter((member) => member.id !== user.id)
    .map((member) => member.displayName)
    .join(',')
    : channel.name,
    users:
    channel.type === 'DIRECT'
    ? channel.members.map((member) => mapUser(member))
    : await(async () => {
        const result = await CharacterData.arguments({ channel})

        if (result.succeeded) {
            return result.paginator.items.map((member) => mapUser(member))
        }
        return []
    })(),
    lastMessage:
    channel.lastReceivedMessage && mapMessage(channel.lastReceivedMessage, 'DD MMMM, HH:mm'),
  _channel: channel,
  _messages_paginator: null,
  _chat_session: null
})