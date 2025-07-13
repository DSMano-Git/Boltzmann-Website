import React from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);

  const blogId = parseInt(id, 10);
  const maxId = 45; // You know you have 45 items

  return (
    <div style={{ padding: '40px', fontFamily: "'Inter', sans-serif", maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Blog #{blogId}</h1>
      <p style={{ marginBottom: '40px', lineHeight: '1.6', fontSize: '16px', color: '#374151' }}>
        This is the detailed content for blog post #{blogId}. Here you can render real blog data or markdown.
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '80px'
      }}>
        {blogId > 1 && (
          <button
            onClick={() => navigate(`/blogs/${blogId - 1}?page=${page}`)}
            style={{
              padding: '10px 20px',
              borderRadius: '999px',
              border: 'none',
              background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
              color: '#fff',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) =>
              (e.target.style.background = 'linear-gradient(90deg, #6366f1, #7c3aed)')
            }
            onMouseOut={(e) =>
              (e.target.style.background = 'linear-gradient(90deg, #7c3aed, #6366f1)')
            }
          >
            ← Previous
          </button>
        )}
        <button
          onClick={() => navigate(`/blogs?page=${page}`)}
          style={{
            padding: '10px 20px',
            borderRadius: '999px',
            border: '1px solid #e5e7eb',
            background: '#f3f4f6',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Back to Blogs
        </button>
        {blogId < maxId && (
          <button
            onClick={() => navigate(`/blogs/${blogId + 1}?page=${page}`)}
            style={{
              padding: '10px 20px',
              borderRadius: '999px',
              border: 'none',
              background: 'linear-gradient(90deg, #7c3aed, #6366f1)',
              color: '#fff',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(99,102,241,0.2)',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) =>
              (e.target.style.background = 'linear-gradient(90deg, #6366f1, #7c3aed)')
            }
            onMouseOut={(e) =>
              (e.target.style.background = 'linear-gradient(90deg, #7c3aed, #6366f1)')
            }
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
