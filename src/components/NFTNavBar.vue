<template>
    <!-- header fixed -->
    <div class="navbar-container">
            <div class="header-auto">
                <!-- left-icon -->
                <div class="hibox-icon">
                    <router-link to="/" class="nav-home-link"> <img src="../assets/images/ic_home.png"> </router-link>
                </div>
                <!-- right-nav -->
                <div class="navbar">
                    <div :class="['navbar-item']">
                        <a href="https://whitepaper.hibox.tel/" target="_blank">Doc</a>
                    </div>
                    <a :class="['navbar-item','paper']" href="https://whitepaper.hibox.tel/" target="_blank">Metamask</a>
                </div>
            </div>
        </div>
  </template>
  
  <script>

  export default {
    name: 'NFTNavBar',
    methods: {
        activeHandle(index) {
                switch (index) {
                    case 0:
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                        break;
                    case 1:
                        window.scrollTo({
                            top: 1040,
                            behavior: "smooth"
                        })
                        break;
                    case 2:
                        window.scrollTo({
                            top: 1760,
                            behavior: "smooth"
                        })
                        break;
                    case 3:
                        window.scrollTo({
                            top: 2400,
                            behavior: "smooth"
                        })
                        break;
                    case 4:
                        window.scrollTo({
                            top: 3880,
                            behavior: "smooth"
                        })
                        break;
                }
                this.activeIndex = index
            },
            scrollMove() {
                clearTimeout(this.timer);
                this.timer = setTimeout(this.scrollEnd, 100);
                // 2.获取当前页面的卷曲高度
                this.setScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            },
            scrollEnd() {
                this.stopscroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (this.stopscroll == this.setScrollTop) {
                    if (this.setScrollTop >= 0 && this.setScrollTop < 1040) {
                        this.activeIndex = 0
                    } else if (this.setScrollTop >= 1040 && this.setScrollTop < 1760) {
                        this.activeIndex = 1
                    } else if (this.setScrollTop >= 1760 && this.setScrollTop < 2400) {
                        this.activeIndex = 2
                    } else if (this.setScrollTop >= 2400 && this.setScrollTop < 3880) {
                        this.activeIndex = 3
                    } else {
                        this.activeIndex = 4
                    }
                }
            }
        }
  }
  </script>
  
  <style lang="scss" scoped>
  .navbar-container {
            // min-width: 1440px;
            position: fixed;
            width: 100% !important;
            height: 154px;
            left: 0px;
            top: 0px;
            border-bottom: 1px solid #656565;
            /* 矩形 4 */
            box-sizing: border-box;
            background: linear-gradient(270.00deg, rgba(23,0,60,1.00),rgba(85,66,175,1.00) 100%);
            border: 1px solid rgb(112, 112, 112);
            z-index: 100;

            .header-auto {
                width: 100%;
                height: 154px;
                margin: 0 auto;
            .hibox-icon {
                float: left;
                cursor: pointer;
                width: 189px;
                height: 189px;
                margin-left: 132px;
                margin-top: -52px;
                position: absolute;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .navbar {
                float: right;
                height: 54px;
                margin-right: 38px;
                margin-top: 30px;

                .navbar-item {
                    float: left;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 25px;
                    font-family: PingFang SC;
                    line-height: 30px;
                    letter-spacing: 0px;
                    text-align: left;

                    /* identical to box height */
                    display: flex;
                    align-items: flex-end;
                    color: #FFFFFF;
                    margin-left: 70px;
                    cursor: pointer;

                    &:last-child {
                        color: #000000;
                        border-radius: 6px;
                        font-size: 20 px;
                        line-height: 30px;
                        margin-top: -4px;
                        padding: 4px 16px;
                        color: #FFFFFF;
                        background: rgba(0, 0, 0, 0.16);
                        border: 2px solid rgb(255, 255, 255);
                        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
                        filter: blur(0.2px);
                        border-radius: 27px;
                    }
                }

                .special-margin {
                    margin-left: 80px;
                }

                .active {
                    padding-bottom: 20px;
                    border-bottom: 2px solid #FFFFFF;
                }
         }
      }
  }
</style>