'use client';

import React, { useState, createContext, useContext } from 'react';
import './faq.css'; 

const AccordionContext = createContext();

export function Accordion({ children, type = 'single', collapsible = false, className = '' }) {
  const [openItem, setOpenItem] = useState(type === 'single' ? null : []);

  const toggleItem = (itemValue) => {
    if (type === 'single') {
      setOpenItem((prev) => (prev === itemValue ? (collapsible ? null : prev) : itemValue));
    } else {
      setOpenItem((prev) =>
        prev.includes(itemValue)
          ? prev.filter((item) => item !== itemValue)
          : [...prev, itemValue]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem, type }}>
      <div className={`accordion-wrapper ${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
}

// Accordion Item Component
export function AccordionItem({ value, children }) {
  const { openItem, type } = useContext(AccordionContext);
  const isOpen = type === 'single' ? openItem === value : openItem.includes(value);

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, value });
        }
        return child;
      })}
    </div>
  );
}

// Accordion Trigger Component
export function AccordionTrigger({ children, value, isOpen }) {
  const { toggleItem } = useContext(AccordionContext);

  return (
    <button
      onClick={() => toggleItem(value)}
      className={`accordion-trigger ${isOpen ? 'active' : ''}`}
    >
      {children}
      <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
    </button>
  );
}

// Accordion Content Component
export function AccordionContent({ children, isOpen }) {
  return (
    <div className={`accordion-content ${isOpen ? 'expanded' : ''}`}>
      <div className="accordion-content-inner">{children}</div>
    </div>
  );
}

// FAQ Component
export function FAQ() {
  return (
    <div className="faq-container">
      <h2 className="faq-title">
        <span className="highlight">FAQ's</span>
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How To Join <span className="highlight"> Academora</span>?
          </AccordionTrigger>
          <AccordionContent>
            Sign up using your university email address and follow the verification process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What is <span className="highlight"> Community </span> Options?
          </AccordionTrigger>
          <AccordionContent>
            Community options allow you to join and participate in various university groups and activities.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What Are The <span className="highlight">Guidelines</span> To be Followed?
          </AccordionTrigger>
          <AccordionContent>
            Our guidelines ensure respectful interaction and maintain a productive learning environment.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
