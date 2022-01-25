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
Die Framerate wurde auf ~ 60 FPS erhöht, damit das Spiel flüssiger läuft. Dies hat voraussichtlich keine Konsequenzen auf die Performance.

### 29.11.2021

Es gibt nun die Möglichkeit, Sounds einzufügen.

### 4.12.2021

Wände wurden grundlegend überarbeitet, es gibt nur noch eine Wandart, diese passt sich automatisch an angrenzende Wände an. Außerdem kann man sich nicht mehr durch Wände buggen.
Das Soundsystem wurde überarbeitet und ist jetzt objektorientiert.

### 5.12.2021

Portale wurden hinzugefügt, man kann so in andere Welten kommen.

### 8.12.2021

Schadenfunktion wurde hinzugefügt & kleinere Mapänderungen.

### 9.12.2021

Spielfigur besitzt im Gegensatz zu uns jetzt Leben & regeneriert sich an der Heizung.

### 14.12.2021

Es wurden Hindernisse eingefügt, also Sachen über die man nicht drüberlaufen kann, aber auch keine richtigen Wände sind; als erstes kamen Tische hinzu.

### 16.12.2021

Man kann sterben wenn man zu lange draußen im Kalten war, es gibt einen Respawn Screen.
Dazu kamen auch Lehrer, die einem später folgen werden, wenn man verbotene Korridore betritt.

### 20.1.2022

Lehrer haben nun keine Superkraft mehr und können statt in alle Richtungen nur noch ein 60° Blickfeld überwachen. Kommt man ihnen zu nahe bemerken sie einen aber weiterhin.

### 22.1.2022

Das Blickfeld der Lehrer wurde darauf vorbereitet, nicht mehr durch Wände schauen zu können. Dafür wurde ein Algorithmus eingefügt, der testet, ob der Spieler in einem Polygon ist, anstatt nur eines einfachen Dreiecks. Dieses Polygon muss jetzt nur noch erstellt werden, indem nach Wänden im Blickfeld getestet wird.

### 25.1.2022

Das Blickfeld passt sich testweise an Wände an, das Ganze funktioniert zwar noch eher schlecht als recht, aber der Anfang ist gemacht. Man sollte vorsorglich eine zweite Grafikkarte einbauen, performancetechnisch ist das System nämmlich alles andere als ideal.