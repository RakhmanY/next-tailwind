import ContactItems from "./ContactItems";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function Contact() {
    return (
        <section className="container mx-auto bg-yellow-300">
            <div className="bg-gray-50 flex">
                <div className="w-6/12 border-r border-gray-200">
                    <div className="py-16 px-20">
                        <SectionTitle left>Contact</SectionTitle>
                        <SectionParagraph left>Beberapa cara menghubungi saya</SectionParagraph>

                        <ContactItems
                            label="Mail"
                            value="yudazauliarakhman23@gmail.com"
                            icon="/mail.svg"
                            className="mt-10"
                        />
                        <ContactItems
                            label="Phone"
                            value="087820189150"
                            icon="/phone.svg"
                            className="mt-6"
                        />
                        <ContactItems
                            label="Twitter"
                            value="@yudazrakhman"
                            icon="/twitter.svg"
                            className="mt-6"
                        />
                    </div>
                </div>
                <div className="w-6/12">
                    <form className="py-16 px-20">
                        <div className="flex -mx-4">
                            <div className="w-6/12 px-4">
                                <Field
                                    label="Name"
                                    name="name"
                                    type="text"
                                />
                            </div>
                            <div className="w-6/12 px-4">
                                <Field
                                    label="Email"
                                    name="email"
                                    type="text"
                                />
                            </div>
                        </div>
                        <Field
                            label="Subject"
                            name="subject"
                            type="text"
                        />
                        <Field
                            label="Subject"
                            name="subject"
                            type="textarea"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
}