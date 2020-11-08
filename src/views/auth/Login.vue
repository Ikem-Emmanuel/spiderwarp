<template>
    <div>
        <v-app-bar class="mb-16" color="light" densedark>
            <span class="text-md-body-1">| PARCEL MONITORING DASHBOARD</span>
            <v-spacer></v-spacer>
        </v-app-bar>
        <template>
            <v-row justify="center" class="mx-10">
                    <v-card>
                        <v-card-title>
                            <span class="headline">User Profile</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-form class="w-full">
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    label="Legal first name*"
                                                    required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    label="Legal middle name"
                                                    hint="example of helper text only on focus"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    label="Legal last name*"
                                                    hint="example of persistent helper text"
                                                    persistent-hint
                                                    required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field
                                                    label="Email*"
                                                    required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field
                                                    label="Password*"
                                                    type="password"
                                                    required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                        >
                                            <v-select
                                                    :items="['0-17', '18-29', '30-54', '54+']"
                                                    label="Age*"
                                                    required
                                            ></v-select>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                        >
                                            <v-autocomplete
                                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                                    label="Interests"
                                                    multiple
                                            ></v-autocomplete>
                                        </v-col>
                                    </v-form>
                                </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="dialog = false"
                            >
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
            </v-row>
        </template>
    </div>
</template>

<script>
    export default {
        name: "Login",
        components: {}
    }
</script>

<style scoped>

</style>