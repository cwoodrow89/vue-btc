<template>
    <nav :class="{'is-active':isActive}" class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">

            <router-link class="navbar-item" to="/">Bitcoin Unlimited</router-link>

            <a @click="isActive = !isActive" role="button" :class="{'is-active':isActive}" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" :class="{'is-active':isActive}" class="navbar-menu">
            <div class="navbar-start">

            <router-link @click.native="isActive = false" class="navbar-item" to="/">Home</router-link> 
            <router-link @click.native="isActive = false" class="navbar-item" to="/about">About</router-link>

            <!-- <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                More
                </a>

                <div class="navbar-dropdown">
                <a class="navbar-item">
                    About
                </a>
                <a class="navbar-item">
                    Jobs
                </a>
                <a class="navbar-item">
                    Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                    Report an issue
                </a>
                </div>
            </div> -->
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary-invert">
                            <strong>Sign up</strong>
                        </a>
                    </div>
                </div>
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-dark">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'BuNav',
    props: {
        resize: Boolean
    },
    data() {
        return {
            isActive: false
        }
    },
    watch: {
        resize() {
            this.isActive = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    padding: 30px;
    &.is-active {
        position: absolute;
        width: 100%;
        height: 100%;
    }
}
.navbar-brand {
    font-family: monospace;
    text-decoration: underline;
}
.navbar-menu.is-active {
    display: block;
    height: 85vh;

    .navbar-item{
        display: flex;
        justify-content: center;
    }
}

.burger {
    color: white;
}

</style>
