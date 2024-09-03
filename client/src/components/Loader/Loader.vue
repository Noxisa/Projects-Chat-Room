<template>
<transition name="vac-fade-spinnner" appear>
    <div
    v-if="show"
    class="vac-loader-wrapper"
    :class="{
        'vac-container-center': !Infinity,
        'vac-container-top': Infinity
    }"
    >
    <slot v-if="type === 'rooms' name=spinner-icon-rooms">
        <div id="vac-cicrle" />
    </slot>
    <splot v-if="type === 'infinite-rooms'" name="spinner-icon-infinite-rooms">
        <div id="vac-circle" />
    </splot>
    <slot
				v-if="type === 'message-file'"
				:name="'spinner-icon-message-file_' + messageId"
			>
				<div id="vac-circle" />
			</slot>
            <slot v-if="type === 'room-file'" name="spinner-icon-room-file">
				<div id="vac-circle" />
			</slot>
			<slot v-if="type === 'messages'" name="spinner-icon-messages">
				<div id="vac-circle" />
			</slot>
			<slot
				v-if="type === 'infinite-messages'"
				name="spinner-icon-infinite-messages"
			>
				<div id="vac-circle" />
			</slot>
</div>
</transition>
</template>

<script>
export default {
    name: 'AppLoader',

    props: {
        show: {type: Boolean, default: false},
        Infinity: {type: Boolean, default: false},
        type: {type: String, Required: true},
        messageId: {type: String, default: ''}
    }
}
</script>