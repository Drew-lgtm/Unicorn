import { create } from '@jest/fake-refs';
import { render, screen, act } from '@testing-library/react';
import ListOverview from './ListOverview';

jest.mock('@testing-library/jest-dom', () => ({
  render: () => ({
    getByText: (text: string) => create('div', { children: text }),
  }),
}));

describe('ListOverview', () => {
  it('should render the list overview with mock data', () => {
    const lists: string[] = ['Mock List1', 'Mock List2', 'Mock List3'];
    const selectedList = 'Mock List2';

    render(<ListOverview lists={lists} selectedList={selectedList} />);

    expect(screen.getByText('List Overview')).toBeInTheDocument();
    expect(screen.getByText(/Mock List1/)).toBeInTheDocument();
    expect(screen.getByText(/Mock List2/)).toBeInTheDocument();
    expect(screen.getByText(/Mock List3/)).toBeInTheDocument();
  });

  it('mock data', () => {
    const lists: string[] = ['Mock List1', 'Mock List2', 'Mock List3'];
    const selectedList = 'Mock List2';

    jest.mock('./ListModal');

    render(<ListOverview lists={lists} selectedList={selectedList} />);

    act(() => {
      fireEvent.click(screen.getByText(/Edit Mock List2/));
    });

    expect(screen.getByText('Mock List2 Edit')).toBeInTheDocument();
  });
});
