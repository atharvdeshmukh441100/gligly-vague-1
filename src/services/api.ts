export interface PostData {
  content: string;
  // Potentially other fields if the API expects them directly,
  // but for now, only content as backend parses frontmatter.
}

export interface PostResponse {
  id: number; // Or string if UUID
  user_id: string;
  title: string;
  content: string;
  description?: string | null;
  image_url?: string | null;
  tags?: string[] | null;
  links?: string[] | null;
  created_at: string;
  updated_at?: string | null;
}

const API_BASE_URL = '/api'; // Assuming proxied by Vite

export async function savePost(postData: PostData): Promise<PostResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${your_auth_token}`, // If auth is needed
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Failed to save post and could not parse error response.' }));
      console.error('API Error Data (savePost):', errorData);
      throw new Error(errorData.detail || `Failed to save post. Status: ${response.status}`);
    }
    return await response.json() as PostResponse;
  } catch (error) {
    console.error('Error in savePost:', error);
    throw error;
  }
}

export async function getPost(postId: number): Promise<PostResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
      method: 'GET',
      headers: {
        // 'Authorization': `Bearer ${your_auth_token}`, // If auth is needed
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Post with ID ${postId} not found.`);
      }
      const errorData = await response.json().catch(() => ({ message: `Failed to fetch post ${postId} and could not parse error response.` }));
      console.error(`API Error Data (getPost ${postId}):`, errorData);
      throw new Error(errorData.detail || `Failed to fetch post. Status: ${response.status}`);
    }
    return await response.json() as PostResponse;
  } catch (error) {
    console.error(`Error in getPost (ID: ${postId}):`, error);
    throw error;
  }
}

export async function updatePost(postId: number, postData: { content: string }): Promise<PostResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${your_auth_token}`, // If auth is needed
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: `Failed to update post ${postId} and could not parse error response.` }));
      console.error(`API Error Data (updatePost ${postId}):`, errorData);
      throw new Error(errorData.detail || `Failed to update post. Status: ${response.status}`);
    }
    return await response.json() as PostResponse;
  } catch (error) {
    console.error(`Error in updatePost (ID: ${postId}):`, error);
    throw error;
  }
}
