Notification System Design

Priority Logic
Placement = 3
Result = 2
Event = 1

Sorting Logic

1. Fetch notifications from API
2. Assign priority values
3. Sort by priority descending
4. If same priority, sort by latest timestamp
5. Return top 10 notifications

Time Complexity

O(n log n)
