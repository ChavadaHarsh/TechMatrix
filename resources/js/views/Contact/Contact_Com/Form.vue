<template>
    <div
        class="w-full font-[Poppins] flex flex-col gap-4 items-center justify-center my-12"
    >
        <h1
            class="text-3xl xl:text-4xl font-[950] text-gray-900 tracking-wider"
        >
            Send A Message
        </h1>
        <p
            class="text-xl xl:text-2xl font-[400] text-gray-900 tracking-wide uppercase"
        >
            Your email address will not be published. Required fields are
            marked.
        </p>

        <form
            @submit.prevent="handleSubmit"
            class="w-full max-w-lg flex flex-col gap-4 mt-6"
        >
            <!-- Name Field -->
            <div class="flex flex-col gap-1">
                <label class="font-semibold">Name *</label>
                <input
                    v-model="form.name"
                    type="text"
                    class="border border-gray-300 rounded p-2"
                />
                <span v-if="errors.name" class="text-red-500 text-sm">{{
                    errors.name
                }}</span>
            </div>

            <!-- Email Field -->
            <div class="flex flex-col gap-1">
                <label class="font-semibold">Email *</label>
                <input
                    v-model="form.email"
                    type="email"
                    class="border border-gray-300 rounded p-2"
                />
                <span v-if="errors.email" class="text-red-500 text-sm">{{
                    errors.email
                }}</span>
            </div>

            <!-- Website Field -->
            <div class="flex flex-col gap-1">
                <label class="font-semibold">Website</label>
                <input
                    v-model="form.website"
                    type="url"
                    class="border border-gray-300 rounded p-2"
                />
                <span v-if="errors.website" class="text-red-500 text-sm">{{
                    errors.website
                }}</span>
            </div>

            <!-- Message Field -->
            <div class="flex flex-col gap-1">
                <label class="font-semibold">Message *</label>
                <textarea
                    v-model="form.message"
                    class="border border-gray-300 rounded p-2"
                    rows="5"
                ></textarea>
                <span v-if="errors.message" class="text-red-500 text-sm">{{
                    errors.message
                }}</span>
            </div>

            <!-- Submit Button -->
            <button
                type="submit"
                class="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
                Send Message
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            form: {
                name: "",
                email: "",
                website: "",
                message: "",
            },
            errors: {},
        };
    },
    methods: {
        handleSubmit() {
            this.errors = {};

            // Simple Validation
            if (!this.form.name) this.errors.name = "Name is required.";
            if (!this.form.email) this.errors.email = "Email is required.";
            else if (!this.validEmail(this.form.email))
                this.errors.email = "Email is invalid.";
            if (this.form.website && !this.validURL(this.form.website))
                this.errors.website = "Website URL is invalid.";
            if (!this.form.message)
                this.errors.message = "Message is required.";

            // If no errors, submit form
            if (Object.keys(this.errors).length === 0) {
                alert("Form submitted successfully!");
                console.log(this.form);

                // Reset form
                this.form = {
                    name: "",
                    email: "",
                    website: "",
                    message: "",
                };
            }
        },
        validEmail(email) {
            const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            return re.test(email);
        },
        validURL(url) {
            try {
                new URL(url);
                return true;
            } catch (_) {
                return false;
            }
        },
    },
};
</script>
