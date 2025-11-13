import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const Client = createClient({
    projectId: '2ta04ihm',
    dataset: 'production',
    useCdn:true,
    apiVersion:"2024-06-03",
})

const builder = imageUrlBuilder(Client);
export const urlFor = (source:any) => builder.image(source).url();

export default Client;
