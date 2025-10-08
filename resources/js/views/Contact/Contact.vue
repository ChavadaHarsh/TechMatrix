<template>
    <div>
        <PageLayout>
            <TitlePage />
            <Form />
        </PageLayout>
    </div>
</template>
<script>
import PageLayout from "../../components/PageLayout.vue";
import Form from "./Contact_Com/Form.vue";
import TitlePage from "./Contact_Com/TitlePage.vue";

export default {
    name: "Contact",
    components: {
        PageLayout,
        TitlePage,
        Form,
    },
};
</script>
