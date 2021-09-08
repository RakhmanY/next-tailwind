import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCards from "./SkillCard";

export default function SectionSkills() {
    return (
        <section className="py-28 bg-gray-50" id="skills">
            <div className="container mx-auto">
                <SectionTitle>Skills</SectionTitle>
                <SectionParagraph>Beberapa kemampuan saya</SectionParagraph>

                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="w-4/12 px-4 pb-8">
                        <SkillCards
                            name="Javascript"
                            level="Lanjutan"
                            image="/javascript.svg"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-8">
                        <SkillCards
                            name="Nextjs"
                            level="Lanjutan"
                            image="/nextjs.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-8">
                        <SkillCards
                            name="Nextjs"
                            level="Lanjutan"
                            image="/nextjs-icon.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-8">
                        <SkillCards
                            name="NodeJS"
                            level="Lanjutan"
                            image="/nodejs-icon.svg"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-8">
                        <SkillCards
                            name="NodeJS"
                            level="Lanjutan"
                            image="/nodejs.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="w-4/12 px-4 pb-8">
                        <SkillCards
                            name="Discord"
                            level="Lanjutan"
                            image="/discord-icon.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="w-4/12 px-4">
                        <SkillCards
                            name="Sumblime"
                            level="Lanjutan"
                            image="/sublimetext-icon.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="w-4/12 px-4">
                        <SkillCards
                            name="Nextjs"
                            level="Lanjutan"
                            image="/nextjs-icon.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="w-4/12 px-4">
                        <SkillCards
                            name="Javascript"
                            level="Lanjutan"
                            image="/java.svg"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}