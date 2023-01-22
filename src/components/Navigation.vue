<template>
    <header :class="{ 'scrolled-nav' : scrolledNav }">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <nav>
            <div class="branding">
                <img class="logo" :style="imgStyle" src="../assets/Logo.png" alt="logo">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li class="link"><router-link class="link" :to="{ name: 'Home'}">Home</router-link></li>
                <li class="link"><router-link class="link" :to="{ name: 'Fun' }">Fun</router-link></li>
                <li class="link"><router-link class="link" :to="{ name: 'chatgpt'}">Par Chat-GPT</router-link></li>
                <li class="link"><router-link class="link" :to="{ name: 'Fun'}">Je t'aime</router-link></li>
                <li class="link"><router-link class="link" :to="{ name: 'Fun' }">Photos</router-link></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="material-symbols-outlined" :class="{'icon-active' : mobileNav}">menu</i>
            </div>
            <transition name="mobile-nav">
              <ul v-show="mobileNav" class="dropdown-nav">
                <li class="link"><router-link class="link" :to="{ name: 'Home'}">Home</router-link></li>
                <li class="link"><router-link class="link" :to="{ name: 'Fun' }">Fun</router-link></li>
                <li class="link"><router-link class="link" :to="{ name: 'chatgpt'}">Par Chat-GPT</router-link></li>
                <li class="link"><router-link class="link" :to="{ name: 'Fun'}">Je t'aime</router-link></li>
                <li class="link"><router-link class="link" :to="{ name: 'Fun' }">Photos</router-link></li>
              </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
export default {
    name:"navigation",
    data() {
        return {
            scrolledNav: null,
            mobile: false,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
    },
    computed: {
            imgStyle() {
                if (window.innerWidth < 768) {
                return { width: '15%', height: 'auto', 'object-fit': 'cover' }
                } else {
                return { width: '60px', height: '60px', 'object-fit': 'contain' }
                }
            },
        },
};
</script>

<style lang="scss" scoped>
header {
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: #fff;

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transform: .5 ease all;
        width: 90%;
        margin: 0 auto;
        @media(min-width: 1140px) {
            max-width: 1140px;
        }

        .logo {
            pointer-events: none;
            object-fit: cover;
            transform: scale(1.5);
            width: 100%;
            height: 100%;
        }

        ul, 
        .link {
            font-weight: 500;
            color: #fff;
            list-style: none;
            text-decoration: none;
        }


        li {
            text-transform: uppercase;
            padding: 16px;
            margin-left: 16px;
        }

        .link {
            font-size: 14px;
            transition: .5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;

            &:hover {
                color: #00afea;
                border-color: #00afea;
            }
        }

        .branding {
            display: flex;
            align-items: center;

            img {
                width: 50px;
                transition: .5s ease all;
            }
        }

        .navigation {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .icon {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 24px;
            height: 100%;

            i {
                font-size: 24px;
                transition: .8s ease all;
            }
        }

        .icon-active {
            transform: rotate(180deg);
        }

        .dropdown-nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 250px;
            height: 100%;
            background-color: rgb(150, 150, 150);
            top: 0;
            left: 0;

            li {
                margin-left: 0;
                .link {
                    color: #000;
                }
            }
        }
        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
            transition: 1s ease all;
        }

        .mobile-nav-enter-from,
        .mobile-nav-leave-to {
            transform: translateX(-250px);
        }

        .mobile-nav-enter-to {
            transform: translateX(0);
        }
    }
}

.scrolled-nav {
    background-color: #000;
    box-shadow: 0 4px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    nav {
        padding: 8px 0;

        .branding {
            img {
                width: 40px;
                box-shadow: 0 4px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
        }
    }
}
</style>