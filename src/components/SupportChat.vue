<template>
  <div>
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling" />
  </div>
</template>

<script>
import Vue from 'vue'
import Chat from 'vue-beautiful-chat'
import axios from 'axios'

Vue.use(Chat)

export default {
  name: 'SupportChat',
  data() {
    return {
      participants: [
        {
          id: 'customer',
          name: 'Customer',
          imageUrl: 'data:image/jpeg;base64,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'
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: true, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false,
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },

  methods: {
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'me', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      if (message.type !== "text") {
        console.warn('Bad message type:', message.type);
        return;
      }

      console.info('Sending message...', message);
      this.messageList = [ ...this.messageList, message ]
      message.autor = 'support'

      axios
        .post('http://localhost:5000/chat/send_message', message)
        .then(function (response) {
          console.log('Response is', response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    }
  },

  mounted() {
    setInterval(() => {
      axios
        .get('http://localhost:5000/chat/get_all_messages')
        .then((messages) => {
          for (var msg_idx in messages.data) {
            messages.data[msg_idx].type = "text";

            if (messages.data[msg_idx].author == 'support') {
              messages.data[msg_idx].author = 'me'
            }
          }
          console.log('Got messages:', messages.data);
          this.messageList = messages.data;
        })
        .catch((error) => { console.log(error);})
    }, 1000);
  }
}

</script>