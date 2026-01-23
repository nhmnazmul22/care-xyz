import EmptyState from "@/components/pages/ServiceDetails/EmptyState";
import Hero from "@/components/pages/ServiceDetails/Hero";
import Details from "@/components/pages/ServiceDetails/Details";
import {getService} from "@/actions/server/service.action";


export async function generateMetadata({params}) {
    const serviceId = (await params).id;
    const {data: service} = await getService(serviceId);

    return {
        title: service.title,
        description: service.shortDescription,

        openGraph: {
            type: "website",
            locale: "bn_BD",
            url: `https://care-xyz-silk.vercel.app/services/${serviceId}`,
            title: service.title,
            description: service.shortDescription,
            images: [
                {
                    url: service.image,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
                {
                    url: "https://i.ibb.co/Hp24NmLn/services.png",
                    width: 1200,
                    height: 630,
                    alt: "Care XYZ Product Page Preview",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: service.title,
            description: service.shortDescription,
            images: [service.image],
        },
    };
}


const ServiceDetailsPage = async ({params}) => {
    const serviceId = (await params).id;
    const {data: service} = await getService(serviceId);

    if (!service) {
        return <EmptyState/>;
    }

    return (
        <div>
            <Hero service={service}/>
            <Details service={service}/>
        </div>
    );
};

export default ServiceDetailsPage;
