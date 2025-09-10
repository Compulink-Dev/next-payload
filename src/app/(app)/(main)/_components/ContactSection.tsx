"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

function ContactSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-blue-700" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Headquarters</h3>
            <p className="text-muted-foreground">
              80 Samora Machel Avenue
              <br />
              P. O. Box 1283, Harare, Zimbabwe
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-green-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-green-700" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Telephone</h3>
            <p className="text-muted-foreground">
              +263 0242 703 000
              <br />
              +263 867 700 0477
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-amber-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-amber-700" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground">info@rbz.co.zw</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-muted p-6 rounded-lg"
        >
          <h3 className="font-semibold text-lg mb-4 text-center">
            RTGS Operating Hours
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-medium">Mon - Fri</p>
              <p className="text-muted-foreground">08:00 - 16:00</p>
            </div>
            <div>
              <p className="font-medium">Sat & Sun</p>
              <p className="text-muted-foreground">Closed</p>
            </div>
            <div>
              <p className="font-medium">Public Holidays</p>
              <p className="text-muted-foreground">Closed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
