var footballClubs = ["Naples", "Chelsea", "Zenit", "Sparta", "Leeds"];
var pril = ["вонючий", "офигенный", "шикарный", "мерзкий", "драный"];
var susch = ["шляпа", "вагина", "топор", "убийца", "пушка", "бомба"];
var randomCLubs = footballClubs[Math.floor(Math.random() * 5)];
var randomPril = pril[Math.floor(Math.random() * 5)];
var randomSuschs = susch[Math.floor(Math.random() * 6)];
var randomResult = "Скажу тебе по секрету, что " + randomCLubs + " просто " + randomPril + " и если честно, он напоминает мне " + randomSuschs;
randomResult;