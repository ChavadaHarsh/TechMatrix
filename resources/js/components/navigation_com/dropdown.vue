<template>
    <ul
        class="absolute w-80 z-50 text-center pt-3 -top-5 right-[99%] bg-[#00B5AC] flex flex-col gap-2 text-white shadow-lg rounded min-w-[160px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300"
    >
        <li
            v-for="(child, idx) in items"
            :key="idx"
            class="w-full flex justify-center items-center p-3 border-b-2 border-white/10 active:scale-90 duration-300"
        >
            <router-link
                :to="'/' + child.toLowerCase().replace(/ /g, '-')"
                class="hover:text-black/75 hover: transition-all duration-300"
                @click="$emit('closeDropdown')"
            >
                {{ child }}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Dropdown",
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>
