import '@testing-library/jest-dom';
import { describe, it, jest, expect } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import { useUnit } from 'effector-react';
import { useParams } from 'react-router-dom';
import { fetchRepoById, repoDetailParamName } from '../model';
import RepoDetailPage from './RepoDetailPage';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

jest.mock('effector-react', () => ({
  useUnit: jest.fn(),
}));

jest.mock('../model', () => ({
  $detailedRepository: jest.fn(),
  $detailedRepositoryLoading: jest.fn(),
  fetchRepoById: jest.fn(),
}));

describe('RepoDetailPage', () => {
  it('renders loading state', () => {
    (useParams as jest.Mock).mockReturnValue({ [repoDetailParamName]: 'MDEwOlJlcG9zaXRvcnk5MTU3MzUzOA==' });
    (useUnit as jest.Mock).mockReturnValue([null, true]);
    
    render(<RepoDetailPage />);
    
    //@ts-ignore
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('renders not found state', () => {
    (useParams as jest.Mock).mockReturnValue({ [repoDetailParamName]: '___MDEwOlJlcG9zaXRvcnk5MTU3MzUzOA==' });
    (useUnit as jest.Mock).mockReturnValue([null, false]);
    
    render(<RepoDetailPage />);
    //@ts-ignore
    expect(screen.getByText('Not found')).toBeInTheDocument();
  });

  it('renders repository details', async () => {
    const mockRepo = {
      name: 'MDEwOlJlcG9zaXRvcnk5MTU3MzUzOA==',
      description: '12306智能刷票，订票',
      stargazerCount: 33736,
      url: 'https://github.com/testerSunshine',
      updatedAt: '2024-07-04T05:29:14Z',
      languages: ['Python', 'Dockerfile', 'Shell'],
      owner: {
        avatarUrl: "https://avatars.githubusercontent.com/u/20162049?u=e84bd901b23092ebb2411aa370ec688573b2b191&v=4",
        login: "testerSunshine",url: "https://github.com/testerSunshine",
      } 
    };

    (useParams as jest.Mock).mockReturnValue({ [repoDetailParamName]: 'MDEwOlJlcG9zaXRvcnk5MTU3MzUzOA==' });
    (useUnit as jest.Mock).mockReturnValue([mockRepo, false]);

    render(<RepoDetailPage />);
    
    await waitFor(() => {
    //@ts-ignore
      expect(screen.getByText(mockRepo.name)).toBeInTheDocument();
    //@ts-ignore
      expect(screen.getByText(mockRepo.description)).toBeInTheDocument();
    });
  });

  it('calls fetchRepoById with correct id', () => {
    (useParams as jest.Mock).mockReturnValue({ [repoDetailParamName]: '1' });
    (useUnit as jest.Mock).mockReturnValue([null, true]);
    
    render(<RepoDetailPage />);
    
    //@ts-ignore
    expect(fetchRepoById).toHaveBeenCalledWith('1');
  });
});