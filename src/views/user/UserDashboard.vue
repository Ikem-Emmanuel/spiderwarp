<template>
    <div>
        <v-app-bar color="deep-purple accent-4" densedark>
            <v-toolbar-title>| PARCEL MONITORING DASHBOARD</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu right bottom >
                <template v-slot:activator="{ on, attrs }">
                    <div class="px-10">
                        <div class="d-flex align-content-center" icon v-bind="attrs" v-on="on" >
                            <span class="caption">Hi Admin</span>
                            <v-icon right>mdi-dots-vertical</v-icon>
                        </div>
                    </div>
                </template>
                <template>
                    <div class="">
                        <v-list>
                            <v-list-item v-for="(navDropdown, index) in navDropdowns" :key="index" @click="() => {}">
                                <v-list-item-title>{{navDropdown}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </div>
                </template>
            </v-menu>
        </v-app-bar>
        <div>User Dashboard</div>
    </div>
</template>

<script>
    export default {
        name: "UserDashboard",
        components: {},
        data () {
            return{
                navDropdowns : ['Admin Dashboard','Logout']
            }
        }
    }
</script>

<style scoped>

</style>