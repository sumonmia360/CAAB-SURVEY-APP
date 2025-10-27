import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Row, Table } from "react-native-table-component";
import WebView from "react-native-webview";
interface Question {
  id: number;
  number: number;
  question_text: string;
  question_text_rich_text: string;
  ref_to_ano: string;
  subject_name: string;
  mark: number;
  na: number;
  no: boolean;
  ns: boolean;
  s: boolean;
  remarks: string;
}

const SingleTable = ({ subjectWaseQuestionsData }: any) => {
  const tableHead = ["No.", "Question", "Ref Code", "Mark", "Remarks"];


  const subJectNameSet = subjectWaseQuestionsData[0].subject_name;

  // track individual webview heights by question id
  const [webViewHeights, setWebViewHeights] = useState<Record<number, number>>(
    {}
  );

  const handleMessage = useCallback((event: any, id: number) => {
    const data = event?.nativeEvent?.data;
    const parsed = parseInt(String(data), 10);
    if (!isNaN(parsed)) {
      setWebViewHeights((prev) => {
        if (prev[id] === parsed) return prev;
        return { ...prev, [id]: parsed };
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text className="text-2xl mb-2">{subJectNameSet}</Text>
      <ScrollView horizontal={true}>
        <View>
          <ScrollView>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
              <Row
                data={tableHead}
                widthArr={[50, 501, 150, 70, 201]}
                style={styles.head}
                textStyle={styles.text1}
              />
              {subjectWaseQuestionsData.map(
                (question2: Question, idx: number) => (
                  <Row
                    key={question2.id}
                    widthArr={[50, 501, 150, 70, 201]}
                    textStyle={styles.text}
                    data={[
                      idx + 1,
                      <>
                        {question2.question_text_rich_text ? (
                          <WebView
                            key={question2.id}
                            originWhitelist={["*"]}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            onMessage={(e) => handleMessage(e, question2.id)}
                            injectedJavaScript={`(function() {
                              function sendHeight() {
                                var body = document.body,
                                    html = document.documentElement;
                                var h = Math.max(
                                  body.scrollHeight,
                                  body.offsetHeight,
                                  html.clientHeight,
                                  html.scrollHeight,
                                  html.offsetHeight
                                );
                                window.ReactNativeWebView.postMessage(String(h));
                              }
                              sendHeight();
                              var observer = new MutationObserver(function() { sendHeight(); });
                              observer.observe(document.body, { childList: true, subtree: true, characterData: true });
                              window.addEventListener('load', sendHeight);
                              setTimeout(sendHeight,5000);
                            })();true;`}
                            source={{
                              html: `<html>
                                <head>
                                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                  <style>
                                    html, body {
                                      margin: 0;
                                      padding: 3px;
                                      font-family: Arial;
                                      background-color: #F2F2F2;
                                      min-height: 0;
                                      height: auto !important;
                                      box-sizing: border-box;
                                    }
                                    #content-root {
                                      min-height: 0;
                                      height: auto !important;
                                      box-sizing: border-box;
                                    }
                                    table, td, th { border: 1px solid black; }
                                    td, th { padding: 6px; text-align: center; }
                                  </style>
                                </head>
                                <body>
                                  <div id="content-root">${question2.question_text_rich_text}</div>
                                </body>
                              </html>`
                            }}
                            style={[
                              styles.webviewStyle,
                              {
                                height: webViewHeights[question2.id]
                                  ? webViewHeights[question2.id]
                                  : 120,
                              },
                            ]}
                          />
                        ) : (
                          <Text className="p-3">{question2.question_text}</Text>
                        )}
                      </>,
                      question2.ref_to_ano,
                      question2.mark,
                      question2.remarks,
                    ]}
                  ></Row>
                )
              )}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleTable;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 30,
  },
  webviewStyle: { width: 480 },
  head: { backgroundColor: "#f1f8ff", fontWeight: "black" },
  text: { minHeight: 40, margin: 6, fontWeight: "black", padding: 2 },
  text1: { margin: 6, fontWeight: "black", fontSize: 18 },
});
