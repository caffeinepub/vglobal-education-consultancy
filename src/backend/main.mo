import Map "mo:core/Map";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Int "mo:core/Int";

actor {
  // Types
  type Admin = Principal;
  type Enquiry = {
    name : Text;
    email : Text;
    phone : Text;
    country : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type Testimonial = {
    studentName : Text;
    country : Text;
    university : Text;
    text : Text;
    rating : Nat; // 1-5
  };

  type BlogPost = {
    title : Text;
    content : Text;
    author : Text;
    date : Time.Time;
    category : Text;
  };

  type Event = {
    title : Text;
    description : Text;
    date : Time.Time;
    location : Text;
  };

  // Comparison modules
  module Testimonial {
    public func compare(t1 : Testimonial, t2 : Testimonial) : Order.Order {
      Text.compare(t1.studentName, t2.studentName);
    };
  };

  module BlogPost {
    public func compare(b1 : BlogPost, b2 : BlogPost) : Order.Order {
      Int.compare(b2.date, b1.date); // Newest first
    };
  };

  module Event {
    public func compare(e1 : Event, e2 : Event) : Order.Order {
      Int.compare(e1.date, e2.date); // Upcoming first
    };
  };

  // Data structures
  let admins = Map.singleton(Principal.fromText("2vxsx-fae"), ());

  let enquiries = Map.empty<Nat, Enquiry>();
  let testimonials = Map.empty<Nat, Testimonial>();
  let blogPosts = Map.empty<Nat, BlogPost>();
  let events = Map.empty<Nat, Event>();

  var enquiryCounter = 0;
  var testimonialCounter = 0;
  var blogPostCounter = 0;
  var eventCounter = 0;

  // Admin check
  func assertAdmin(caller : Principal) {
    if (not admins.containsKey(caller)) {
      Runtime.trap("Unauthorized: Admins only");
    };
  };

  // Enquiries
  public shared ({ caller }) func submitEnquiry(input : Enquiry) : async Nat {
    let id = enquiryCounter;
    enquiryCounter += 1;

    let enquiry : Enquiry = {
      input with
      timestamp = Time.now();
    };

    enquiries.add(id, enquiry);
    id;
  };

  public shared ({ caller }) func getAllEnquiries() : async [Enquiry] {
    assertAdmin(caller);
    enquiries.values().toArray();
  };

  // Testimonials
  public shared ({ caller }) func addTestimonial(testimonial : Testimonial) : async Nat {
    let id = testimonialCounter;
    testimonialCounter += 1;
    testimonials.add(id, testimonial);
    id;
  };

  public query func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray().sort();
  };

  // Blog Posts
  public shared ({ caller }) func addBlogPost(post : BlogPost) : async Nat {
    assertAdmin(caller);
    let id = blogPostCounter;
    blogPostCounter += 1;
    blogPosts.add(id, post);
    id;
  };

  public query func getAllBlogPosts() : async [BlogPost] {
    blogPosts.values().toArray().sort();
  };

  // Events
  public shared ({ caller }) func addEvent(event : Event) : async Nat {
    assertAdmin(caller);
    let id = eventCounter;
    eventCounter += 1;
    events.add(id, event);
    id;
  };

  public query func getAllEvents() : async [Event] {
    events.values().toArray().sort();
  };

  // Admin management
  public shared ({ caller }) func addAdmin(newAdmin : Principal) : async () {
    assertAdmin(caller);
    admins.add(newAdmin, ());
  };
};
