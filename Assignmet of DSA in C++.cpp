#include <iostream>
#include <windows.h>
#include <vector>
#include <conio.h>
#include <algorithm>
#include <iomanip>
using namespace std;
class Node
{
public:
    string Book_Title, name;
    Node *next;
    Node() : Book_Title(""), name(""), next(nullptr) {}
    Node(string v, string b) : Book_Title(v), name(b), next(nullptr) {}
};
class linkedListArrayStack
{
private:
    Node *head, *tail;
    int size;
    vector<string> Books;
    vector<string> B;

public:
    linkedListArrayStack();
    void show_Library();
    void lent_Books();
    void Show_borrows();
    void Recently_Borrows();
    void DeleteAtParticularIndex(int index);
    void return_Book(string n);
    void TITLE(void);
    void Table_of_Library(void);
    void Books_Show_Case(void);
    void No_Books_Available(void);
    void Display_Welcome_Message(void);
    void Submitted_Message(void);
    void Not_Submitted_Message(void);
    void LibraryIsFull();
};

//              ------------------------------>       Main function     <-------------------------------------
int main()
{
    linkedListArrayStack l1;
    char choice;
This_is_Main:
    HANDLE h = GetStdHandle(STD_OUTPUT_HANDLE);
    SetConsoleTextAttribute(h, 6);
    system("cls");
    linkedListArrayStack l2;
    l2.TITLE();
    l2.Books_Show_Case();
    choice = getch();
    if (choice == '1')
    {
        system("cls");
        SetConsoleTextAttribute(h, 1);
        l1.show_Library();
        l1.lent_Books();
        goto This_is_Main;
    }
    else if (choice == '2')
    {
    here:
        SetConsoleTextAttribute(h, 10);
        system("cls");
        l1.Show_borrows();
        cerr << "Enter 8 to Exit() ";
        int g;
        cin >> g;
        if (g == 8)
        {
            goto This_is_Main;
        }
        else
            goto here;
    }
    else if (choice == '3')
    {
    here1:
        SetConsoleTextAttribute(h, 12);
        char h;
        system("cls");
        l1.Recently_Borrows();
        cerr << "Enter 8 to Exit() ";
        cin >> h;
        if (h == '8')
        {
            goto This_is_Main;
        }
        else
        {
            goto here1;
        }
    }
    else if (choice == '4')
    {
        SetConsoleTextAttribute(h, 5);
        system("cls");
        l2.Display_Welcome_Message();
        string book;
        cerr << "Enter Book Name: ";
        cin >> book;
        l1.return_Book(book);
        Sleep(2000);
        goto This_is_Main;
    }
    else if (choice == '5')
    {
        exit(0);
    }
    else
    {
        system("cls");
        goto This_is_Main;
    }

    return 0;
}

// ------------------------------>>>>>>>>>>   All Function Definations Here    <<<<<<<<-----------------------

linkedListArrayStack::linkedListArrayStack() : head(nullptr), tail(nullptr)
{
    system("cls");
    Books.push_back("Science");
    Books.push_back("Physics");
    Books.push_back("Computer");
    Books.push_back("Mathematics");
    size = Books.size();
}

void linkedListArrayStack::show_Library()
{
    if (Books.empty())
    {
        No_Books_Available();
        return;
    }

    // Sort the books before displaying them
    sort(Books.begin(), Books.end());

    cerr << "\n";
    cerr << "  ___                 _  _         _      _        ______                _         \n";
    cerr << " / _ \\               (_)| |       | |    | |       | ___ \\              | |        \n";
    cerr << "/ /_\\ \\__   __  __ _  _ | |  __ _ | |__  | |  ___  | |_/ /  ___    ___  | | __ ___ \n";
    cerr << "|  _  |\\ \\ / / / _` || || | / _` || '_ \\ | | / _ \\ | ___ \\ / _ \\  / _ \\ | |/ // __|\n";
    cerr << "| | | | \\ V / | (_| || || || (_| || |_) || ||  __/ | |_/ /| (_) || (_) ||   < \\__ \\ \n";
    cerr << "\\_| |_/  \\_/   \\__,_||_||_| \\__,_||_.__/ |_| \\___| \\____/  \\___/  \\___/ |_|\_\\|___/ \n";
    cerr << "                                                                                      \n";
    cerr << "\n\n\n";

    // Display the available books dynamically based on the actual number
    int count = Books.size();
    cerr << "+-------------------+                                                             +--------------------+\n";

    for (int i = 0; i < count; i++)
    {

        cerr << "   " << (i + 1) << ") " << setw(20) << left << Books[i];

        if (i % 2 == 0 && (i + 1) < count)
        {
            cerr << "                                                       ";
        }
        else if (i % 2 == 1 || (i + 1) == count)
        {
            cerr << "   \n";
            cerr << "+-------------------+                                                             +--------------------+\n";
        }
    }

    cerr << "\n\n\n"; // Extra spacing after the books are shown
}

void linkedListArrayStack ::lent_Books()
{
    int g;
    cerr << "Your Choice: ";
    cin >> g;
    if (g > size || g <= 0)
    {
        cerr << "Wrong Input :=( \n\n";
        Sleep(2000);
    }
    else
    {
        string n;
        if (head == nullptr)
        {
            cerr << "Enter Your Name: ";
            cin >> n;
            head = new Node(Books[g - 1], n);
            tail = head;
            B.push_back(Books[g - 1]);
        }
        else
        {
            cerr << "Enter Your Name: ";
            cin >> n;
            tail->next = new Node(Books[g - 1], n);
            tail = tail->next;
            B.push_back(Books[g - 1]);
        }
        size--;
        cerr << Books[g - 1] << " Dispatched Successfully!!\n\n";
        Books.erase(Books.begin() + g - 1);
        Sleep(3000);
    }
}

void linkedListArrayStack ::Show_borrows()
{
    if (head == nullptr)
    {
        No_Books_Available();
    }
    else
    {

        int g = 1;
        cerr << "\n";
        cerr << "+-----------+-----------------------+---------------------------------------------------------+\n";
        cerr << "|__Sr.No.___|____Name of Borrower___|__________________________Book Name______________________|\n";
        cerr << "+-----------+-----------------------+---------------------------------------------------------+\n";

        for (Node *T = head; T != nullptr; T = T->next)
        {
            cerr << "|  " << setw(9) << left << g
                 << "|  " << setw(21) << left << T->name
                 << "|  " << setw(55) << left << T->Book_Title
                 << "|\n";
            g++;
        }
        cerr << "+-----------+-----------------------+---------------------------------------------------------+\n";
    }
}
void linkedListArrayStack ::Recently_Borrows()
{
    if (B.empty())
    {
        No_Books_Available();
    }
    else
    {
        int num = 1;
        cerr << "\n\n\n\n\n\n\t\t\t\t\t\t+-----------------------------------------------------------+\n";
        cerr << "\t\t\t\t\t\t|___________________________Stack___________________________|\n";
        cerr << "\t\t\t\t\t\t+-----------------------------------------------------------+\n";

        for (int i = B.size() - 1; i >= 0; i--)
        {
            cerr << "\t\t\t\t\t\t|                   " << setw(20) << left << B[i] << "                    |\n";
            cerr << "\t\t\t\t\t\t+-----------------------------------------------------------+\n";
        }
    }
}

void linkedListArrayStack ::return_Book(string s)
{
    bool found = true;
    int count = 0;
    for (int i = 0; i < size; i++)
    {
        count++;
        if (Books[i] == s)
        {
            found = false;
            exit(0);
        }
    }
    //              |a| |b| |c| |d|
    if (count >= 4)
    {
        LibraryIsFull();
        return;
    }

    else if (found)
    {

        Books.push_back(s);
        Submitted_Message();
        B.pop_back();
        size++;
        int count = 1;
        Node *n = head;
        while (n->Book_Title != s && n->next != NULL)
        {
            count++;
            n = n->next;
        }
        DeleteAtParticularIndex(count);
    }
    else
    {
        Not_Submitted_Message();
    }
}
void linkedListArrayStack ::DeleteAtParticularIndex(int index)
{
    if (index == 1)
    {
        Node *n = head;
        head = head->next;
        delete n;
    }
    else
    {
        index--;
        Node *curr = head;
        Node *Prev = nullptr;
        while (index-- && curr->next != nullptr)
        {
            Prev = curr;
            curr = curr->next;
        }
        if (curr == nullptr)
        {
            cerr << "Index out of Range\n";
        }
        else
        {
            Prev->next = curr->next;
            delete curr;
        }
    }
}

//                     <----------------------------------------->  ASCII ART      <------------------------------------------------->
void linkedListArrayStack ::TITLE(void)
{
    string title =
        "\t\t\t\t             _    _               _     _        _   _                                    \n"
        "\t\t\t\t          /\\     | |                             | |   | |      (_) | |                                 \n"
        "\t\t\t\t         /  \\    | |__    _ __ ___     __ _    __| |   | |       _  | |__    _ __    __ _   _ __   _   _ \n"
        "\t\t\t\t        / /\\ \\   | '_ \\  | '_ ` _ \\   / _` |  / _` |   | |      | | | '_ \\  | '__|  / _` | | '__| | | | |\n"
        "\t\t\t\t       / ____ \\  | | | | | | | | | | | (_| | | (_| |   | |____  | | | |_) | | |    | (_| | | |    | |_| |\n"
        "\t\t\t\t      /_/    \\_\\ |_| |_| |_| |_| |_|  \\__,_|  \\__,_|   |______| |_| |_.__/  |_|     \\__,_| |_|     \\__, |\n"
        "\t\t\t\t                                                                                                    __/ |\n"
        "\t\t\t\t                                                                                                   |___/ \n";

    cerr << "\t\t" << title;
}
void linkedListArrayStack ::Books_Show_Case(void)
{
    cerr << "\n\n";
    cerr << "\t\t\t +--------------------+                                                                                   +--------------------+\n ";
    cerr << "\t\t\t |   1) See Library   |                                                                                   |    2) See Borrows  |\n";
    cerr << "\t\t\t +--------------------+                                                                                   +--------------------+";

    cerr << "\n\n\n\n";
    cerr << "\t\t\t +--------------------+                                                                                   +--------------------+\n ";
    cerr << "\t\t\t |   3) Recent Borrow |                                                                                   |    4) Return Book  |\n";
    cerr << "\t\t\t +--------------------+                                                                                   +--------------------+";

    cerr << "\n\n\n\n";
    cerr << "                                                                         +------------------------+\n";
    cerr << "                                                                         |     5) Exit()          |\n";
    cerr << "                                                                         +------------------------+\n";
}
void linkedListArrayStack ::No_Books_Available(void)
{
    cerr << "\n\n\n\n";
    cerr << "\t\t\t\t                                                                                                                                        \n";
    cerr << "\t\t\t\t,--.  ,--.             ,-----.                   ,--.                   ,---.                       ,--. ,--.          ,--.    ,--.         \n";
    cerr << "\t\t\t\t|  ,'.|  |  ,---.      |  |) /_   ,---.   ,---.  |  |,-.   ,---.       /  O  \\  ,--.  ,--.  ,--,--. `--' |  |  ,--,--. |  |-.  |  |  ,---.  \n";
    cerr << "\t\t\t\t|  |' '  | | .-. |     |  .-.  \\ | .-. | | .-. | |     /  (  .-'      |  .-.  |  \\  `'  /  ' ,-.  | ,--. |  | ' ,-.  | | .-. ' |  | | .-. : \n";
    cerr << "\t\t\t\t|  | `   | ' '-' '     |  '--' / ' '-' ' ' '-' ' |  \\  \\  .-'  `)     |  | |  |   \\    /   \\ '-'  | |  | |  | \\ '-'  | | `-' | |  | \\   --. \n";
    cerr << "\t\t\t\t`--'  `--'  `---'      `------'   `---'   `---'  `--'`--' `----'      `--' `--'    `--'     `--`--' `--' `--'  `--`--'  `---'  `--'  `----' \n";
    cerr << "\t\t\t\t                                                                                                                                        \n";
    cerr << "\t\t\t\t                                      << No Books Available >> \n";
    cerr << "\n";
}
void linkedListArrayStack ::Display_Welcome_Message()
{
    cerr << "\n\n\n";
    cout << "\t                                     __        __         _                                       ____                   _    \n";
    cout << "\t                                     \\ \\      / /   ___  | |   ___    ___    _ __ ___     ___    | __ )    __ _    ___  | | __\n";
    cout << "\t                                      \\ \\ /\\ / /   / _ \\ | |  / __|  / _ \\  | '_ ` _ \\   / _ \\   |  _ \\   / _` |  / __| | |/ /\n";
    cout << "\t                                       \\ V  V /   |  __/ | | | (__  | (_) | | | | | | | |  __/   | |_) | | (_| | | (__  |   < \n";
    cout << "\t                                        \\_/\\_/     \\___| |_|  \\___|  \\___/  |_| |_| |_|  \\___|   |____/   \\__,_|  \\___| |_|\\_\\ \n";
    cout << "\t\t\t\t\t\t\t\n";
}
void linkedListArrayStack::Submitted_Message(void)
{
    cerr << "\n\n\n\n";
    cerr << "\t\t\t\t\t\t   _____       _               _ _   _           _   _______ _                 _        _ _ \n";
    cerr << "\t\t\t\t\t\t  / ____|     | |             (_) | | |         | | |__   __| |               | |      | | |\n";
    cerr << "\t\t\t\t\t\t | (___  _   _| |__  _ __ ___  _| |_| |_ ___  __| |    | |  | |__   __ _ _ __ | | _____| | |\n";
    cerr << "\t\t\t\t\t\t  \\___ \\| | | | '_ \\| '_ ` _ \\| | __| __/ _ \\/ _` |    | |  | '_ \\ / _` | '_ \\| |/ / __| | |\n";
    cerr << "\t\t\t\t\t\t  ____) | |_| | |_) | | | | | | | |_| ||  __/ (_| |    | |  | | | | (_| | | | |   <\\__ \\_|_|\n";
    cerr << "\t\t\t\t\t\t |_____/ \\__,_|_.__/|_| |_| |_|_|\\__|\\__\\___|\\__,_|    |_|  |_| |_|\\__,_|_| |_|_|\\_\\___(_|_)\n";
    cerr << "\t\t\t\t\t\t                                                                                             \n";
}
void linkedListArrayStack::Not_Submitted_Message(void)
{
    cerr << "\n\n\n\n\n";
    cerr << "\t\t\t\t\t\t  ____              _                   _                    _         ______      _     _       _ _ \n";
    cerr << "\t\t\t\t\t\t |  _ \\            | |            /\\   | |                  | |       |  ____|    (_)   | |     | | |\n";
    cerr << "\t\t\t\t\t\t | |_) | ___   ___ | | _____     /  \\  | |_ __ ___  __ _  __| |_   _  | |__  __  ___ ___| |_ ___| | |\n";
    cerr << "\t\t\t\t\t\t |  _ < / _ \\ / _ \\| |/ / __|   / /\\ \\ | | '__/ _ \\/ _` |/ _` | | | | |  __| \\ \\/ / / __| __/ __| | |\n";
    cerr << "\t\t\t\t\t\t | |_) | (_) | (_) |   <\\__ \\  / ____ \\| | | |  __/ (_| | (_| | |_| | | |____ >  <| \\__ \\ |_\\__ \\_|_|\n";
    cerr << "\t\t\t\t\t\t |____/ \\___/ \\___/|_|\\_\\___/ /_/    \\_\\_|_|  \\___|\\__,_|\\__,_|\\__, | |______/_/\\_\\|___/\\__|___(_|_)\n";
    cerr << "\t\t\t\t\t\t                                                                __/ |                                 \n";
    cerr << "\t\t\t\t\t\t                                                               |___/                                  \n";
}
void linkedListArrayStack::LibraryIsFull()
{
    cout << "\a\a\a\a";
    cout << "\n\n\n\n\n";
    cout << "\t\t\t\t\t\t   __    _    __                                  _              ____         __   __     \n";
    cout << "\t\t\t\t\t\t  / /   (_)  / /   ____ ___ _  ____  __ __       (_)  ___       / __/ __ __  / /  / /     \n";
    cout << "\t\t\t\t\t\t / /__ / /  / _ \\ / __// _ `/ / __/ / // /      / /  (_-<      / _/  / // / / /  / /      \n";
    cout << "\t\t\t\t\t\t/____//_/  /_.__//_/   \\_,_/ /_/    \\_, /      /_/  /___/     /_/    \\_,_/ /_/  /_/       \n";
    cout << "\t\t\t\t\t\t                                   /___/                                                \n";
}