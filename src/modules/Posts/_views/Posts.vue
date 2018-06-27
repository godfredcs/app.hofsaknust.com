<template>
<div>
    <app-navbar></app-navbar>
    <app-sub-navbar></app-sub-navbar>
</div>
</template>

<script>
import { Navbar, SubNavbar } from '@/components';
export default {
    components: {
        appNavbar: Navbar,
        appSubNavbar: SubNavbar
    }
}
</script>
