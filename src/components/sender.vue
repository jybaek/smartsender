<template>
  <div id="app">
    <b-container fluid>

      <br>
      <!----------------- INPUT URL ----------------->
      <div>
        <b-input-group class="mb-2">
          <template v-slot:prepend>
            <select v-model="selected">
              <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
          </template>
          <b-form-input v-model="url" placeholder="http://example.com:8443/foo"></b-form-input>
          <b-button variant="primary" v-on:click="send">SEND</b-button>

        </b-input-group>
      </div>


      <!----------------- Headers ----------------->
      <div>
        <b-input-group prepend="Headers" class="mb-2">
          <b-form-input aria-label="Key" v-model="headerKey" placeholder="Key"></b-form-input>
          <b-form-input aria-label="Value" v-model="headerValue" placeholder="Value"></b-form-input>
          <b-button size="sm" text="Button" variant="outline-info">+</b-button>
        </b-input-group>
      </div>

      <!----------------- Query Params ----------------->
      <div>
        <b-input-group prepend="Query Params" class="mb-2">
          <b-form-input aria-label="Key" v-model="queryParamsKey" placeholder="Key"></b-form-input>
          <b-form-input aria-label="Value" v-model="queryParamsValue" placeholder="Value"></b-form-input>
          <b-button size="sm" text="Button" variant="outline-info">+</b-button>
        </b-input-group>
      </div>

      <!----------------- Body( raw ) ----------------->
      <div>
        <b-input-group prepend="Body" class="mb-2">
          <b-form-textarea id="textarea1"
                           v-model="postmsg"
                           placeholder='{
    "key1": "value1",
    "array-key": [
        "key2": "value2"
    ]
}'
                           :rows="10"
                           :max-rows="100">
          </b-form-textarea>
        </b-input-group>
      </div>

    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'sender',
    data()
    {
      return {
        selected: 'GET',
        url: '',
        headerKey: '',
        headerValue: '',
        queryParamsKey: '',
        queryParamsValue: '',
        postmsg: '',
        sendCount: 1,
        timer: 1,
        options: [
          {value: 'GET', text: 'GET'},
          {value: 'POST', text: 'POST'},
        ],
      }
    },
    computed:
      {},
    methods:
      {
        send: function (event) {
          const axios = require('axios').default;

          console.log(this.url);
          if (this.selected == "GET") {
            axios.get(this.url, {
              headers: {
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': ''
              }
            })
            .then(function (response) {
              // handle success
              console.log(response);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .finally(function () {
              // always executed
            });
          }
        },
      },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }

  .input-group > .input-group-prepend {
    flex: 0 0 13%;
  }

  .input-group .input-group-text {
    width: 100%;
  }
</style>
