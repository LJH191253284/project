<template>
  <van-nav-bar>
    <template #left>
      <van-icon
        name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABXCAMAAAB1LTZXAAAAk1BMVEUAAAAAr2cAr2YAr2YAtm0Ar2YAr2YAsGcAr2YAr2gAr2YAr2YAsGcAsmgAtWsAwXMA1nwAr2cAr2YAsGYAr2cAr2cAr2cAsGcAsGcAsWgAsmgAtGkAr2YAr2cAr2cAr2cAr2cAsWgArmsAr2YAr2YAr2YAr2cAr2cAr2YAs2wArmcAr2cAr2cAsGYAsWgAr2YArmYeYsPGAAAAMHRSTlMA/fn2C+3jS+c98d5YLhcIBLt7bGZgUEY0KCQc2smNczkhE9TQwpmTgg+2sKaHQ56FhKtDAAABdElEQVRYw73Xy3KCQBCFYcSBAfGGgOANxTsm6rz/0yWpVKV7l3M0ptffX2yA6fFeN8Zm1hA+TpxzyQb2Zdd9TbgFvfXd9+SkdzXkp5+eeUK/8+ODIed9S/op4AvlLee7iM+d+BLwmfI30seAX4vvsX4D+MnjPqgAf1Z+APgr6WvxEetngD+JDxF/VH7+9358F580gH9XfsH55Sv8m/gd8D8Zsf4ifs/6LeBT8SvAG+1bwB8e9wfzu29XnDfKp4b7XtIR4MdyHl0Q783le4G8N5YT4O5Bo965IxSYSIoTVLRLttjupajp4goVw50UZ7qYYMWSLRaqWGNFIkUGFU3IFnNV5FgRSVFAxUyKDl/0oWIQPFNMoaKSwgeLnhQWKjaqKKEi7qrVjS5iqLjRReljC5mMVUXFXgICsOhga5lM/5kimkFFQRe5XrfoooGKTIoEK9aqWLBFCgV6ca/YokC4XvZLiMu6H+JX8LNczcCJj2ndeP8wHyyjpG47JFZwAAAAAElFTkSuQmCC"
        size="20"
        @click="$router.go(-1)"
      />
      <van-dropdown-menu style="margin-left: 5px; font-size: 12px">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </template>
    <template #title>
      <van-icon
        name="https://img.ljcdn.com/beike/conch/1577526490105.png"
        size="65"
        class="title"
      />
    </template>
    <template #right >
      <van-icon
        name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA2CAMAAACC/Cu0AAABSlBMVEUAAABH26YAv3MAr2YAr2cAr2YAtGsAr2YAsWn+//4Ar2b///8Br2cArmYAr2cAr2gAsmgAr2YAr2YAr2YArmcAr2cArmcAr2cAsGf///////8At2oAuHD///8BrWYArmYRtHD///8Ar2b////4/fr///8Ar2YAr2cAr2cAr2cAsGgAr2cAsGgAsWgAsGcAsGgAtmkLsW0vvoMAr2f+//7+//72/Pr////l9u+b4MPb9On///8Ar2cAr2YAr2b///8Ar2cAr2b///////8Ar2f///8AsWf///+S3b0tvIJcy50Ps2////////8juXv1/Pik48j///87wYrp+PIqvIBt0aiX38Fx0qr///+M2rl/1rP///961q8Ar2f///8AsGf///8zvoX///////////////////////////////8Armbq+PK46NQ1voUcJl5NAAAAaXRSTlMAAwf5s4kc/CPttfr01cc/Jenm3dCNfW1cVSgQDAr99+7n4dvayMK8rXFnY09GOCkW/vHt6OPXzMzDwK2ZmJKMgXdxbV47Mhv9/fz08vHs6eDd19XU0sy/vLu7s6+poZqXlnBeTDMcEAknqp5LAAACFElEQVRIx52UV3vaMBSGhY2xAQ8gzAKhAUIhkJA0ezZp2qZ7771bfW3//21lwMSWJfO07w0Pn19L59hHJv/Jar9rratNu+DEorTEgQ6PubJcLTfgx05IvMJ4pYNiT4ubYORuCL0TMFKTa0op65qiNZcBqH1fW5cA5MN1xixAHwQS11wKiX0AxWBUywFZhRfZ7U0+vAZgmcuqOnBMOBQTOOSyFQArhKcLdLhoAGA1JGrAnKCcWkg8BrKCp5gJiR+APBdlAJRDYh6I81kTSPHZEECJD48EbXcBhN62oQJWNTh1AN6Jh6zjNwcqoBphsZZ3h9GZ/tUgnAlGIgdGZ8lQSNXRsmAUJCfGxhh98nNCJCiHKs5ZP8pIPCcOjrgj0IY2PObn4WEP+ZPQa4yUp6/2tjbSNNne2X0Ml0YvWF0KDPN1m/rY2L0DRkrhvReblOPec850u7i4RwU8uQ/fBJVcr02FJC+fj5BhMm+LUrlpGtONd6iUB2uTzRM68IxG8BDQE0wsAmtJGsWt8UfEAm7TSG4CFnsnKvA7WvwFqLHR+UvTaP64Z9nQtE90Bm81bfSArs8SrzLpn8Tvs8SKN4yzmvlGJryJ9hZinliJFq8Qj58LUV76AplSiV7Qx77ca9X9Yn1R2gnb2M+PbcmAcx5b86PIe3lGwnxthZb7TITEKoFKH53WiZSzL+8XW3fTm9v7p1xxfwFx9J9gWVOICwAAAABJRU5ErkJggg=="
        size="28"
        @click="$router.push('/my')"
      />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "广州", value: 0 },
        { text: "北京", value: 1 },
        { text: "上海", value: 2 },
        { text: "深圳", value: 3 },
      ],
    };
  },
};
</script>

<style lang="less" >
.title {
  margin-bottom: 14px;
}
.van-dropdown-menu__bar {
  box-shadow: none;
}
</style>