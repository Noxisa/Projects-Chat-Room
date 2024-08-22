<template>
    <chat-window
    :current-user-id = "currentUserId"
    :rooms = "rooms"
    :messages = "messages"
/>
</template>

<script>
import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'

export default {
    components: {
        ChatWindow
    },
    data(){
        return {
            rooms: [],
        messages: [],
        currentUserId: 1234
        }
    },
    mounted() {
    document.querySelector('vue-advanced-chat').currentUserId = this.currentUserId
    document.querySelector('vue-advanced-chat').rooms = this.rooms
    document.querySelector('vue-advanced-chat').messages = this.messages
  }
}
</script>

