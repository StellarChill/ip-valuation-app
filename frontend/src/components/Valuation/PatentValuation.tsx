import { useEffect, useState } from 'react';
import axios from 'axios';

type UserStatsProps = {
  query: string;
};

export default function UserStats({ query }: UserStatsProps) {
  const [userStats, setUserStats] = useState<{ posts: number; albums: number; todos: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.trim() === "") {
      setUserStats(null);
      setError(null);
      return;
    }

    const fetchUserStats = async () => {
      setLoading(true);
      setError(null);
      try {
        // ค้นหาผู้ใช้จาก query (สมมติว่า query เป็นชื่อผู้ใช้)
        const userResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/users?email=${query}`
        );
        if (userResponse.data.length === 0) {
          throw new Error('ไม่พบผู้ใช้ที่ตรงกับคำค้นหา');
        }
        const user = userResponse.data[0]; // สมมติว่าเราจะใช้ผู้ใช้แรกที่พบ
        console.log(user);

        // ดึงข้อมูลโพสต์ อัลบั้ม และ todos ของผู้ใช้
        const [postsResponse, albumsResponse, todosResponse] = await Promise.all([
          axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`),
          axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`),
          axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`),
        ]);

        setUserStats({
          posts: postsResponse.data.length,
          albums: albumsResponse.data.length,
          todos: todosResponse.data.length,
        });
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการดึงข้อมูล');
        setUserStats(null);
        setLoading(false);
      }
    };

    fetchUserStats();
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center justify-center px-4 py-8">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-3xl transform transition-all duration-300 hover:shadow-3xl">
        <h2 className="text-2xl font-extrabold text-center mb-6 border-b-2 border-blue-200 pb-3 text-gray-800">
          สถิติผู้ใช้สำหรับ: "{query || 'กรุณาใส่คำค้นหา'}"
        </h2>
        {loading && (
          <div className="text-center text-xl font-semibold text-gray-600">กำลังโหลด...</div>
        )}
        {error && (
          <div className="text-center text-xl font-semibold text-red-600">ข้อผิดพลาด: {error}</div>
        )}
        {userStats && !loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <p className="text-gray-500 text-sm uppercase tracking-wide">จำนวนโพสต์</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">{userStats.posts.toLocaleString()}</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <p className="text-gray-500 text-sm uppercase tracking-wide">จำนวนอัลบั้ม</p>
              <p className="text-2xl font-bold text-green-600 mt-2">{userStats.albums.toLocaleString()}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <p className="text-gray-500 text-sm uppercase tracking-wide">จำนวนงาน</p>
              <p className="text-2xl font-bold text-purple-600 mt-2">{userStats.todos.toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}