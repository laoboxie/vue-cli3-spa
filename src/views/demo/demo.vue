<template>
<div class="Router">
    <div class="img"></div>
    <div @click="$router.push('/demo/')">demo</div>
    <div @click="$router.push('list')">list</div>
    <div @click="$router.push('hello')">hello</div>
    <input type="text" name="">
    <p v-for="(num,index) in nums" :key="index" @click="$router.push({path:'/list',query:{'a':'a'}})">
        {{num}}
    </p>
    <transition :name="transitionName">
        <router-view class="child-view"></router-view>
    </transition>
</div>
</template>

<script>
import keepAliveMixin from "../../mixins/keepAliveMixin.vue";
import childViewMixin from "../../mixins/childView.vue";
import * as md5 from "../../assets/js/md5.js";
import guid from "../../assets/js/guid.js";
// import storage from '../../assets/js/storage.js'
const storage = {};
import api from "../../api/apiSetting.js";
import axios from "axios";
import qs from "qs";
export default {
  name: "",
  mixins: [keepAliveMixin, childViewMixin],
  props: {
    age: {
      type: Number,
      default: 0,
      required: false,
      validator: function(value) {
        return value >= 0;
      }
    }
  },
  data() {
    return {
      nums: 0
    };
  },
  computed: {
    dnums: function() {
      return this.nums * 2;
    }
  },
  watch: {
    nums: {
      handler: function(val, oldVal) {},
      deep: true
    }
  },
  created() {
    // console.log('test123',this.$route);
    // setTimeout(()=>{
    //     this.nums = 15;
    //     //this.scrollToSavedPosition();
    // },1000);
    // return ;

    //storage
    // storage.session.set('sessionkey',[1,{'a':undefined,'c':'c'},{'b':NaN}]);
    // console.log('storage',storage.session.get('sessionkey'));

    //api
    this.$http(api.success, { success: 1 }).then(res => {
      console.log("$http", res);
    });
    this.$http(api.error, { error: 1 }).then(res => {
      console.log("$http", res);
    });
    this.$http(api.wrong, { wrong: 1 }).then(res => {
      console.log("$http", res);
    });
    this.$http(api.post, {
      cmd: "USER_ORDER",
      userId: "130",
      orderType: "5",
      orderFrom: 0,
      productId: "10",
      startDate: "20171123",
      nums: 1,
      children: 1,
      msg: "",
      userName: "22",
      userTel: "13428987195",
      totalAmount: 2300,
      contsList: [{ contsId: "3", ageType: 2, roomId: "1", roomNumber: 1 }],
      feeList: [
        { feeId: "1", buyNum: 1, feeType: 0 },
        { feeId: "1", buyNum: 1, feeType: 1 },
        { feeId: "3", buyNum: 1, feeType: 1 },
        { feeId: "4", buyNum: 1, feeType: 1 }
      ]
    }).then(res => {
      console.log("$http", res);
    });
  },
  mounted() {
    console.log("style", this.$style);
  }
};
</script>


<style  >
p {
  text-align: center;
  background-color: #ccc;
}
.red {
  color: red;
}
.img {
  width: 100%;
  height: 100px;
  background-image: url(../../assets/images/bg.png);
  background-size: 100% 100%;
}
</style>
