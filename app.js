const app = Vue.createApp({
    data() {
        return {
            firstName: 'Sahan',
            lastName: 'Weerakoon',
            email: 'sahan@sahan.com',
            gender: 'male',
            picture: 'https://avatars.githubusercontent.com/u/36650825?v=4'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch("https://randomuser.me/api");

            const { results } = await res.json();
            const { name, email, gender, picture } = results[0];

            this.firstName = name.first,
            this.lastName = name.last,
            this.email = email,
            this.gender = gender,
            this.picture = picture.large
        }
    }
});

app.mount('#app');