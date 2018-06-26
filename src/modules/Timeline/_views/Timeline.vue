<template>
<div>
    <app-navbar></app-navbar>
    <app-sub-navbar></app-sub-navbar>
    <div>
        <app-main></app-main>
        <app-footer></app-footer>
    </div>
</div>
</template>

<script>
import { Navbar, SubNavbar, Footer } from '@/components';
import { Main } from '../_components';

export default {
    components: {
        appNavbar: Navbar,
        appSubNavbar: SubNavbar,
        appFooter: Footer,

        appMain: Main
    }
}
</script>

<style scoped>

</style>
