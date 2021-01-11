/* eslint-disable prettier/prettier */
export default function({ store, redirect }) {
    if (store.state.auth.loggedIn) {
        return redirect('/')
    }
}