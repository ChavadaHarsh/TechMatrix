<template>
    <div>
        <Slider />
        <div class="w-[60%] lg:w-[55%] m-auto text-center">
            <h1 class="text-3xl lg:text-4xl font-[600] font-[Poppins] mt-12">
                Invent the imagination with Right<span class="text-[#00B5AC]">
                    Technology Matrix
                </span>
            </h1>
        </div>
        <PageLayout>
            <Services />
            <SpecificSolution />
        </PageLayout>
    </div>
</template>

<script>
import PageLayout from "../../components/PageLayout.vue";
import Services from "./Home_com/Services.vue";
import Slider from "./Home_com/Silder.vue";
import SpecificSolution from "./Home_com/SpecificSolution.vue";
import gsap from "gsap";
export default {
    name: "Home",
    components: {
        Slider,
        PageLayout,
        Services,
        SpecificSolution,
    },
};
</script>
