# Tagebuch

### 28.10.2021

Nach Eintragung in die Datenbank, um ganz oben zu sein, haben wir ein Github Repo erstellt und angefangen, mit VS-Code im online-Editor zu arbeiten. 
Wir wissen aber immer noch nicht, was wir programmieren wollen.

### 28.10.2021 17.03 uhr 

Haben uns nach längeren hin und her auf ein an Pokémon angelehntes Spiel mit 2D Grafik geeinigt.

### 3.11.2021 

Wir haben ein erstes Konzept, dass wir das Spiel als Webseite aufbauen um Geräteübergreifend programmieren zu können.
In JS arbeiten wir mit canvas, um eine möglichst einfache 2d Grafik zu bekommen.

### 4.11.2021 

Nachdem wir festgestellt haben, dass der online Editor nicht das Wahre ist, da wir die Seite nicht live testen können, sind wir auf eine offline Kopie des Repo umgestiegen.
Die Map kann nun aus einer Variable ausgelesen werden und wird im canvas dargestellt. Wir haben den Spieler testweise als Kreis dargestellt. Tastatureingaben können inzwischen erkannt werden, eine Tick Funktion sorgt für automatische Updates der Map alle 35 ms.

### 18.11.2021

Der Spieler kann jetzt auch mit Touch gesteuert werden, die Touch Steuerung funktioniert durch einfaches Ziehen auf dem Bildschirm.
Der Code wurde optimiert und unwichtige Funktionen wurden entfernt.

### 24.11.2021

Die Map wird nun aus einem Multi-Line String ausgelesen und wurde um Treppen und weitere Dekorationen erweitert. Man kann mehrere Maps erstellen und nach belieben laden lassen.

### 25.11.2021

Es gibt Entities, also Dinge, mit denen man mal interagieren können soll. Dazu kam auch eine Technik, die erkennt, in welche Richtung der Spieler läuft und dementsprechend eine andere Textur für den Spieler anzeigt.
Plan für die nächste Woche: 8 Spielertexturen, Interaktionen mit Entities ermöglichen, schmalere Wände, mehr Dekorationen.

### 28.11.2021

Die 8 Spielertexturen sind fertig, zudem wurde die Heizung modelliert. Ecken in den Wänden passen sich absofort automatisch an angrenzende Wände an.

### 29.11.2021

Es gibt nun die Möglichkeit, Sounds einzufügen.

### 4.12.2021

Wände wurden grundlegend überarbeitet, es gibt nur noch eine Wandart, diese passt sich automatisch an angrenzende Wände an. Außerdem kann man sich nicht mehr durch Wände buggen.
Das Soundsystem wurde überarbeitet und ist jetzt objektorientiert.