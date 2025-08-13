import { createServer, Model, Response } from "miragejs";

export default function startMirage() {
  createServer({
    models: {
      vans: Model,
    },
    seeds(server) {
      server.create("van", {
        id: "1",
        name: "Modest Explorer",
        price: 60,
        description:
          "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
        type: "simple",
        hostId: "678",
        visibility: "public",
      });
      server.create("van", {
        id: "2",
        name: "Beach Bum",
        price: 80,
        description:
          "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
        type: "rugged",
        hostId: "123",
        visibility: "public",
      });
      server.create("van", {
        id: "3",
        name: "Reliable Red",
        price: 100,
        description:
          "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
        type: "luxury",
        hostId: "789",
        visibility: "private",
      });
      server.create("van", {
        id: "4",
        name: "Dreamfinder",
        price: 65,
        description:
          "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
        type: "simple",
        hostId: "123",
        visibility: "public",
      });
      server.create("van", {
        id: "5",
        name: "The Cruiser",
        price: 120,
        description:
          "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
        type: "luxury",
        hostId: "456",
        visibility: "private",
      });
      server.create("van", {
        id: "6",
        name: "Green Wonder",
        price: 70,
        description:
          "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
        imageUrl:
          "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
        type: "rugged",
        hostId: "123",
        visibility: "public",
      });
      server.create("van", {
        id: "7",
        name: "Neon Nights",
        price: 90,
        description:
          "Neon Nights is a vibrant van that brings the party wherever you go. With LED lighting throughout, a premium sound system, and a retro-modern design, this van is perfect for music festivals and urban adventures.",
        imageUrl:
          "https://images.unsplash.com/photo-1561871733-4947db1043c7?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "rugged",
        hostId: "456",
        visibility: "public",
      });
      server.create("van", {
        id: "8",
        name: "Mountain Majesty",
        price: 140,
        description:
          "Mountain Majesty is the ultimate luxury van for alpine adventures. Features include heated floors, a fireplace, premium bedding, and all-terrain capabilities. Experience the mountains in complete comfort and style.",
        imageUrl:
          "https://images.unsplash.com/photo-1630188665808-efb87b98d29a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "luxury",
        hostId: "789",
        visibility: "public",
      });
      server.create("van", {
        id: "9",
        name: "Sunset Seeker",
        price: 55,
        description:
          "Sunset Seeker is a budget-friendly van perfect for spontaneous road trips. Simple yet functional, with basic amenities and a cozy sleeping area. Great for first-time van lifers and weekend warriors.",
        imageUrl:
          "https://images.unsplash.com/photo-1639156813096-1c45dfef0000?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "simple",
        hostId: "678",
        visibility: "public",
      });
      server.create("van", {
        id: "10",
        name: "Urban Nomad",
        price: 85,
        description:
          "Urban Nomad is designed for city explorers who want the freedom to roam. Compact yet cleverly designed with fold-out furniture and smart storage solutions. Perfect for urban camping and city breaks.",
        imageUrl:
          "https://images.unsplash.com/photo-1627490208521-09e934514fe3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "simple",
        hostId: "456",
        visibility: "public",
      });
      server.create("van", {
        id: "11",
        name: "Desert Storm",
        price: 95,
        description:
          "Desert Storm is built tough for extreme conditions. With reinforced chassis, extra water storage, and superior cooling systems, this rugged van can handle the harshest environments while keeping you comfortable.",
        imageUrl:
          "https://images.unsplash.com/photo-1682253310562-78fb3ee09ef3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "rugged",
        hostId: "123",
        visibility: "public",
      });
      server.create("van", {
        id: "12",
        name: "Coastal Cruiser",
        price: 110,
        description:
          "Coastal Cruiser combines luxury with practicality for seaside adventures. Features outdoor shower, surfboard storage, and panoramic windows. The perfect companion for coastal road trips and beach camping.",
        imageUrl:
          "https://images.unsplash.com/photo-1548776556-e5e904ce5fce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "luxury",
        hostId: "456",
        visibility: "public",
      });
      server.create("van", {
        id: "13",
        name: "Forest Runner",
        price: 75,
        description:
          "Forest Runner is perfect for nature enthusiasts who love off-grid adventures. Equipped with solar panels, water filtration system, and high-clearance suspension for accessing remote forest locations.",
        imageUrl:
          "https://images.unsplash.com/photo-1537804548639-ddf0511a8e21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "rugged",
        hostId: "789",
        visibility: "public",
      });
      server.create("van", {
        id: "14",
        name: "Vintage Voyager",
        price: 65,
        description:
          "Vintage Voyager brings classic style to modern adventures. This beautifully restored van features retro aesthetics with modern amenities. Perfect for those who appreciate timeless design and craftsmanship.",
        imageUrl:
          "https://images.unsplash.com/photo-1423439793616-f2aa4356b37e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "simple",
        hostId: "678",
        visibility: "public",
      });
      server.create("van", {
        id: "15",
        name: "Sky Wanderer",
        price: 130,
        description:
          "Sky Wanderer offers premium amenities for the discerning traveler. Features include a pop-up roof, premium kitchen appliances, luxurious seating, and smart home technology integration.",
        imageUrl:
          "https://images.unsplash.com/photo-1502352981868-f957ab3e10eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "luxury",
        hostId: "123",
        visibility: "private",
      });
    },
    routes() {
      this.namespace = "api";
      this.logging = true;

      this.get("/vans", (schema) => schema.vans.all());

      this.get("/vans/:id", (schema, request) => {
        const id = request.params.id;
        const van = schema.vans.find(id);
        return van || new Response(404, {}, { error: "Van not found" });
      });

      this.get("/host/vans", (schema) => {
        return schema.vans.where({ hostId: "123" });
      });

      this.get("/host/vans/:id", (schema, request) => {
        const id = request.params.id;
        const van = schema.vans.findBy({ id, hostId: "123" });
        return van || new Response(404, {}, { error: "Van not found for this host" });
      });
    },
  });
}