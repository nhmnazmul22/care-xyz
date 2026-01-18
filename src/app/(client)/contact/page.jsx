import {FiMessageCircle} from "react-icons/fi";
import PageHeader from "@/components/common/Header/PageHeader.jsx";
import ContactInfo from "@/components/pages/Contact/ContactInfo/ContactInfo.jsx";
import FaqSec from "@/components/pages/Contact/Faq/FaqSec.jsx";
import Map from "@/components/pages/Contact/Map/Map.jsx";
import ContactForm from "@/components/pages/Contact/ContactForm/ContactForm.jsx";

const ContactPage = () => {
    return (
        <div>
            <PageHeader
                badgeLabel={"Get In Touch"}
                badgeIcon={<FiMessageCircle/>}
                title="We're Here to"
                subTitle=" Help"
                description="Have questions about our services? Need help finding the right
              caregiver? Our team is ready to assist you every step of the way."
            />
            <ContactInfo/>
            <section className="py-16">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <ContactForm/>
                        <Map/>
                    </div>
                </div>
            </section>
            <FaqSec/>
        </div>
    );
};

export default ContactPage;
