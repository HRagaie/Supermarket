users = ["user1","user2","user3","user4"]
items = ["Banana","Orange","Kiwi","Apple","PineApple","Lemon"] 
purchasesHistory = [("user1",[["Banana","Orange","Kiwi"],["Banana","Orange","Apple"]]),
					("user4",[])]


createEmptyFreqList :: [a] -> [(a, [b])]
createEmptyFreqList [] = []
createEmptyFreqList (x:xs) = (x,[]) :createEmptyFreqList xs 

removeItem _ []                 = []
removeItem x (y:ys) | x == y    = removeItem x ys
                    | otherwise = y : removeItem x ys

userHistory user ((a,b):xs) = if a == user then b else userHistory user xs 
--userHistory "user1" purchasesHistory
--[["Banana","Orange","Kiwi"],["Banana","Orange","Apple"]]


getAllUsersStats :: [(String, [[String]])] -> [(String, [(String, [(String, Int)])])]
getAllUsersStats [] = []
getAllUsersStats ((a,b):xs) = if b ==[] then (a,createEmptyFreqList items):getAllUsersStats xs
							   else (getAllUsersStatsHelper (userHistory a purchasesHistory) createEmptyFreqList items):getAllUsersStats xs
--getAllUserStats purchasesHistory 

--if b ==[] then ("user4",[("Banana",[]),("Orange",[]),("Kiwi",[]),("Apple",[]),("Lemon",[]),("PineApple",[])]) : getAllUserStats restofList
-- else getAllUsersStatsHelper ( [["Banana","Orange","Kiwi"],["Banana","Orange","Apple"]] [("Banana",[]),("Orange",[]),("Kiwi",[]),("Apple",[]),("Lemon",[]),("PineApple",[])]) : getAllUserStats restofList

getAllUsersStatsHelper [] _ = []
getAllUsersStatsHelper (y:ys) ((item,count):xs) = if item `elem` y then countFreq (removeItem item y) (item,count) else getAllUsersStatsHelper (ys) ((item,count):xs)
-- y = ["Banana","Orange","Kiwi"]
-- ys = ["Banana","Orange","Apple"]
--item = "Banana"
--count = []
--xs = [("Orange",[]),("Kiwi",[]),("Apple",[]),("Lemon",[]),("PineApple",[])]
-- if item `elem` y then countFreq ["Orange","Kiwi"] ("Banana", []) else getAllUsersStatsHelper ys ((item,count):xs)


countFreq [] _ = []
countFreq (x:xs) (item,count) =  if x `elem` count then incrementCount x count else (item,(x,1)): countFreq xs (item,count)
-- x = "Orange"
--xs = "Kiwi"
--item = "Banana"
--count = []
-- if "Orange" `elem` [] then incrementCount "Orange" count else ("Banana", ("Orange",1)): countFreq  "Kiwi" ["Orange","Kiwi"]

--let's take for example count = [("Orange",[1]),("Kiwi",[1])]
incrementCount _ [] = []
incrementCount x ((item,count):ys) = if x ==item then ((item,1+count):ys) else incrementCount x ys
--x = "Orange"
-- item = "Orange"
--count = 1
--ys = ("Kiwi",[1])
--if x = item then (("Orange",1+1),ys) else incrementCount x ys

