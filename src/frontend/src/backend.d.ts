import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Event {
    title: string;
    date: Time;
    description: string;
    location: string;
}
export interface BlogPost {
    title: string;
    content: string;
    date: Time;
    author: string;
    category: string;
}
export type Time = bigint;
export interface Enquiry {
    country: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface Testimonial {
    country: string;
    studentName: string;
    text: string;
    university: string;
    rating: bigint;
}
export interface backendInterface {
    addAdmin(newAdmin: Principal): Promise<void>;
    addBlogPost(post: BlogPost): Promise<bigint>;
    addEvent(event: Event): Promise<bigint>;
    addTestimonial(testimonial: Testimonial): Promise<bigint>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getAllEvents(): Promise<Array<Event>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    submitEnquiry(input: Enquiry): Promise<bigint>;
}
