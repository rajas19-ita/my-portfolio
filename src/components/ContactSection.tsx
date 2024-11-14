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
            <form className="flex flex-col gap-4 w-full max-w-xl mx-auto">
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
            </form>
        </section>
    );
});

export default ContactSection;
