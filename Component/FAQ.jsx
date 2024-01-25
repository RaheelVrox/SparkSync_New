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
        "SparkSync is an electricity provider finding app that helps Texans navigate the state’s deregulated electricity market. Through its user-friendly features and comprehensive information, SparkSync enables consumers to make educated choices and find plans tailored specifically to their individual needs.",
    },
    {
      question: "How does Spark Sync work?",
      answer:
        "SparkSync.pro works by first collecting information about your location, energy consumption, preferences, contract lengths, and renewable energy options. SparkSync then uses this information to compare electricity plans from different providers and help you select one that best meets your needs. Furthermore, customer reviews for each plan provide additional insight to make an informed decision.",
    },

    {
      question:
        "How Can Sparksync Help Me Find The Right Electricity Provider?",
      answer:
        "SparkSync.pro makes finding an electricity provider easy by providing an accessible platform with comprehensive information on available providers and their plans – including prices, contract lengths, renewable energy options and customer reviews.",
    },

    {
      question: "Is Spark Sync free to use?",
      answer:
        "Yes, SparkSync.pro is a free service for users. There are no charges or fees to access the platform, compare plans, or switch electricity providers.",
    },
    {
      question: "How do I switch electricity providers with Spark Sync?",
      answer:
        "SparkSync.pro makes finding an electricity provider easy by providing an accessible platform with comprehensive information on available providers and their plans – including prices, contract lengths, renewable energy options and customer reviews.",
    },
    {
      question: "Is Sparksync Available Throughout Texas?",
      answer:
        "Yes, SparkSync is available state-wide in Texas. It covers various regions and cities, allowing users from across the state to benefit from its services.",
    },
    {
      question: "Can I trust the information provided by Spark Sync?",
      answer:
        "Yes, SparkSync is available state-wide in Texas. It covers various regions and cities, allowing users from across the state to benefit from its services.",
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
    marginBottom: 18,
    textAlign: "center",
    backgroundColor: "#04202C",
    marginHorizontal: 24,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto-Regular",
    color: "#fff",
    paddingLeft: 5,
  },
  answerText: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Roboto-Regular",
    color: "#B6B6B6",
    lineHeight: 24,
  },
});

export default FAQList;
