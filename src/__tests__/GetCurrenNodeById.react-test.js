import { getCurrentNodeById } from '../selectors';

var tree = {
    "id": 1,
    "questionId": 1,
    "answerId": null,
    "a": {
        "id": 2,
        "questionId": 2,
        "answerId": null,
        "a": {
            "id": 3,
            "questionId": null,
            "answerId": 21
        },
        "b": {
            "id": 4,
            "questionId": 6,
            "answerId": null,
            "a": {
                "id": 5,
                "questionId": null,
                "answerId": 16
            },
            "b": {
                "id": 6,
                "questionId": null,
                "answerId": 1
            }
        }
    },
    "b": {
        "id": 7,
        "questionId": 2,
        "answerId": null,
        "a": {
            "id": 8,
            "questionId": 3,
            "answerId": null,
            "a": {
                "id": 9,
                "questionId": 4,
                "images": [
                    "9m.jpg"
                ],
                "answerId": null,
                "a": {
                    "id": 10,
                    "questionId": 5,
                    "answerId": null,
                    "a": {
                        "id": 11,
                        "questionId": 8,
                        "answerId": null,
                        "a": {
                            "id": 12,
                            "questionId": null,
                            "answerId": 19
                        },
                        "b": {
                            "id": 13,
                            "questionId": null,
                            "answerId": 2
                        }
                    },
                    "b": {
                        "id": 14,
                        "questionId": 8,
                        "answerId": null,
                        "a": {
                            "id": 15,
                            "questionId": null,
                            "answerId": 20
                        },
                        "b": {
                            "id": 16,
                            "questionId": null,
                            "answerId": 23
                        }
                    }
                },
                "b": {
                    "id": 17,
                    "questionId": 5,
                    "answerId": null,
                    "a": {
                        "id": 18,
                        "questionId": 8,
                        "answerId": null,
                        "a": {
                            "id": 19,
                            "questionId": null,
                            "answerId": 15
                        },
                        "b": {
                            "id": 20,
                            "questionId": null,
                            "answerId": 3
                        }
                    },
                    "b": {
                        "id": 21,
                        "questionId": 8,
                        "answerId": null,
                        "a": {
                            "id": 22,
                            "questionId": null,
                            "answerId": 14
                        },
                        "b": {
                            "id": 23,
                            "questionId": null,
                            "answerId": 5
                        }
                    }
                }
            },
            "b": {
                "id": 24,
                "questionId": 5,
                "answerId": null,
                "a": {
                    "id": 25,
                    "questionId": 8,
                    "answerId": null,
                    "a": {
                        "id": 26,
                        "questionId": null,
                        "answerId": 15
                    },
                    "b": {
                        "id": 27,
                        "questionId": null,
                        "answerId": 3
                    }
                },
                "b": {
                    "id": 28,
                    "questionId": 8,
                    "answerId": null,
                    "a": {
                        "id": 29,
                        "questionId": null,
                        "answerId": 14
                    },
                    "b": {
                        "id": 30,
                        "questionId": null,
                        "answerId": 5
                    }
                }
            }
        },
        "b": {
            "id": 31,
            "questionId": 6,
            "answerId": null,
            "a": {
                "id": 32,
                "questionId": 7,
                "answerId": null,
                "a": {
                    "id": 33,
                    "questionId": 5,
                    "answerId": null,
                    "a": {
                        "id": 34,
                        "questionId": 8,
                        "answerid": null,
                        "a": {
                            "id": 35,
                            "questionId": null,
                            "answerId": 6
                        },
                        "b": {
                            "id": 36,
                            "questionId": null,
                            "answerId": 13
                        }
                    },
                    "b": {
                        "id": 37,
                        "questionId": 8,
                        "answerid": null,
                        "a": {
                            "id": 38,
                            "questionId": null,
                            "answerId": 7
                        },
                        "b": {
                            "id": 39,
                            "questionId": null,
                            "answerId": 12
                        }
                    }
                },
                "b": {
                    "id": 40,
                    "questionId": 8,
                    "answerid": null,
                    "a": {
                        "id": 41,
                        "questionId": null,
                        "answerId": 22
                    },
                    "b": {
                        "id": 42,
                        "questionId": null,
                        "answerId": 12
                    }
                }
            },
            "b": {
                "id": 43,
                "questionId": 7,
                "answerId": null,
                "a": {
                    "id": 44,
                    "questionId": 5,
                    "answerId": null,
                    "a": {
                        "id": 45,
                        "questionId": 8,
                        "answerid": null,
                        "a": {
                            "id": 46,
                            "questionId": null,
                            "answerId": 8
                        },
                        "b": {
                            "id": 47,
                            "questionId": null,
                            "answerId": 11
                        }
                    },
                    "b": {
                        "id": 48,
                        "questionId": 8,
                        "answerid": null,
                        "a": {
                            "id": 49,
                            "questionId": null,
                            "answerId": 9
                        },
                        "b": {
                            "id": 50,
                            "questionId": null,
                            "answerId": 10
                        }
                    }
                },
                "b": {
                    "id": 51,
                    "questionId": 8,
                    "answerid": null,
                    "a": {
                        "id": 52,
                        "questionId": null,
                        "answerId": 9
                    },
                    "b": {
                        "id": 53,
                        "questionId": null,
                        "answerId": 10
                    }
                }
            }
        }
    }
};

test('getCurrentNodeById returns the node with the correct ID', () => {
    var state = {
        tree
    };
    var currentNode = getCurrentNodeById(state, 48);
    expect(currentNode.questionId).toBe(8);
});

