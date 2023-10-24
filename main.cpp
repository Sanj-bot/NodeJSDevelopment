#include<iostream>
static int a1,a2,a3,a4,a5,a6,a7,a8,a9;

using namespace std;
void pattern();
int main()
{
int t;
cout<<"How many times would you like to play the game:"<<endl;
cin>>t;
for(int i=0;i<t;i++)
{	cout<<i+1<<" time"<<endl;
		// logic goes here
	
}
	pattern();
// Logic 
	if((a1==a2==a3||a4==a5==a6||a7==a8==a9||a1==a4==a7||a2==a5==a8||a3==a6==a9||a1==a5==a9||a3==a5==a7)==1)
	{
		cout<<"Player 1 wins"<<endl;
	}
	else if((a1==a2==a3||a4==a5==a6||a7==a8==a9||a1==a4==a7||a2==a5==a8||a3==a6==a9||a1==a5==a9||a3==a5==a7)==0)
	{
		cout<<"Player 2 Wins"<<endl;
	}


return 0;
}
void pattern()
{   	
	cout<<a1<<"|"<<a2<<"|"<<a3<<endl;
	cout<<"______"<<endl;
	cout<<a4<<"|"<<a5<<"|"<<a6<<endl;
	cout<<"______"<<endl;
	cout<<a7<<"|"<<a8<<"|"<<a9<<endl;		
}

