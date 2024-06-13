"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { toast } from "sonner";

function isInputNamedElement(
  e: Element,
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

const Waitlist = () => {
  const initialData = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };

  const [data, setData] = useState(initialData);

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      }),
    });

    if (response.status === 200) {
      setData(initialData);
      toast.success(
        `Hallo ${formData.firstName} ${formData.lastName}, Sie wurden erfolgreich der Warteliste hinzugefügt.`,
      );
    }
  }

  return (
    <form onSubmit={handleOnSubmit} className="lg:flex-auto w-full z-10">
      <div className="relative md:font-semibold font-medium text-[30px] md:text-[30px] text-[#1E2B3A]">
        Bleiben Sie informiert über unsere&nbsp;
        <span className="text-[#407BBF]">Warteliste.</span>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-8">
        <div>
          <div className="mt-0">
            <input
              type="text"
              name="firstName"
              placeholder="Vorname"
              id="firstName"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1E2B3A] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="mt-0">
            <input
              type="text"
              name="lastName"
              placeholder="Nachname"
              id="lastName"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1E2B3A] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="mt-0">
            <input
              id="email"
              placeholder="E-Mail-Adresse"
              name="email"
              type="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1E2B3A] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="mt-0">
            <textarea
              id="message"
              name="message"
              placeholder="Ihre Nachricht an uns"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1E2B3A] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#407BBF] sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="group rounded-full pl-[8px] h-10 w-full pr-4 py-2 text-[13px] font-medium transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2 active:scale-95 scale-100 duration-75"
          style={{
            boxShadow:
              "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
          }}
        >
          Zugang anfragen
        </button>
      </div>
      <p className="mt-4 text-sm leading-6 text-[#1E2B3A] text-center sm:text-left">
        Durch Eintragung in die Warteliste akzeptieren Sie unsere&nbsp;
        <Link
          href="/privacy-policy"
          target="_blank"
          className="font-semibold text-[#407BBF]"
        >
          Datenschutzbestimmungen
        </Link>
        .
      </p>
    </form>
  );
};

export default Waitlist;