import ProjectItems from "./ProjectItems";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionProjects() {
    return (
        <section className="py-28" id="projects">
            <div className="container mx-auto">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Beberapa proyek bikinan saya</SectionParagraph>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="w-6/12 px-4 pb-8">
                        <ProjectItems
                            name="Griya Yatim dan Dhuafa"
                            description="Explorasi Landing Page"
                            image="/projects-1.png"
                        />
                    </div>
                    <div className="w-6/12 px-4 pb-10">
                        <ProjectItems
                            name="Griya Yatim dan Dhuafa"
                            description="Explorasi Landing Page"
                            image="/projects-2.png"
                        />
                    </div>
                    <div className="w-6/12 px-4">
                        <ProjectItems
                            name="Griya Yatim dan Dhuafa"
                            description="Explorasi Landing Page"
                            image="/projects-1.png"
                        />
                    </div>
                    <div className="w-6/12 px-4">
                        <ProjectItems
                            name="Griya Yatim dan Dhuafa"
                            description="Explorasi Landing Page"
                            image="/projects-2.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}