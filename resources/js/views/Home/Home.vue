<template>
    <div>
        <Slider />
        <div class="w-[60%] lg:w-[55%] m-auto text-center">
            <h1 class="text-3xl lg:text-4xl font-[95%] font-[Poppins] mt-12">
                Invent the imagination with Right<span class="text-[#00B5AC]">
                    Technology Matrix
                </span>
            </h1>
        </div>
        <PageLayout>
            <Services />
        </PageLayout>
    </div>
</template>

<script>
import PageLayout from "../../components/PageLayout.vue";
import Services from "./Home_com/Services.vue";
import Slider from "./Home_com/silder.vue";
export default {
    name: "Home",
    components: {
        Slider,
        PageLayout,
        Services,
    },
};
</script>
