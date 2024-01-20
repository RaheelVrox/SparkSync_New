import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FAQ = ({ question, answer, onPress, isOpen }) => {
  return (
    <View style={styles.infoBox}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.questionText, isOpen && { color: "#069FF8" }]}>
          {question}
        </Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={{ marginTop: 10 }}>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionPress = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Spark Sync?",
      answer:
        "Spark Sync is an electricity provider finding app that helps you to find the best plan for your needs.",
    },
    {
      question: "How does Spark Sync work?",
      answer: "Your answer for how Spark Sync works.",
    },
    {
      question: "Is Spark Sync free to use?",
      answer: "Your answer for how Spark Sync works.",
    },
    {
      question: "How do I switch electricity providers with Spark Sync?",
      answer: "Your answer for how Spark Sync works.",
    },
    {
      question: "Is Spark Sync free to use?",
      answer: "Your answer for how Spark Sync works.",
    },
    {
      question: "Is Spark Sync free to use?",
      answer: "Your answer for how Spark Sync works.",
    },
    {
      question: "Can I trust the information provided by Spark Sync?",
      answer: "Your answer for how Spark Sync works.",
    },
  ];

  return (
    <View>
      {faqs.map((faq, index) => (
        <FAQ
          key={index}
          question={faq.question}
          answer={faq.answer}
          onPress={() => handleQuestionPress(index)}
          isOpen={openIndex === index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    borderWidth: 0.5,
    borderColor: "#607A8C",
    borderRadius: 20,
    padding: 20,
    margin: 10,
    textAlign: "center",
    backgroundColor: "#04202C",
    marginHorizontal: 24,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto-Regular",
    color: "#fff",
  },
  answerText: {
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Roboto-Regular",
    color: "#B6B6B6",
    lineHeight: 24,
  },
});

export default FAQList;
