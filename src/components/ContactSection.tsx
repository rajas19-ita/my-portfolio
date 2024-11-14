import { forwardRef, useState } from "react";

interface ContactForm {
    email: string;
    message: string;
}

const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
    const [formData, setFormData] = useState<ContactForm>({
        email: "",
        message: "",
    });

    return (
        <section className="py-20 flex flex-col gap-10" ref={ref}>
            <h2 className="text-center text-3xl underline underline-offset-4 mb-1">
                Contact Me
            </h2>
            <form
                name="contact"
                data-netlify={true}
                method="post"
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-4 w-full max-w-xl mx-auto"
            >
                <input type="hidden" name="contact" value="contact" />
                <input
                    type="text"
                    placeholder="Your email"
                    className="px-4 py-3 rounded-md border-2"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                        }))
                    }
                />
                <textarea
                    placeholder="Your message"
                    className="px-4 py-3 border-2 rounded-md"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                        }))
                    }
                />
                <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#27283D] text-white rounded-md self-center"
                >
                    Submit
                </button>
            </form>
        </section>
    );
});

export default ContactSection;
