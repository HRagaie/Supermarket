public class GameView extends JFrame {
	private JPanel buttonPanel;
	private JPanel infoPanel;
	private JTextArea informationDisplay;
	private JTextArea availableUnits;
	private JPanel unitButtonPanel;
	private JPanel disasterPanel;
	private JTextArea disasterDisplay;
	private JButton cycle;
	private JButton ambulanceUnit;
	private JButton diseaseControlUnit;
	private JButton gasControlUnit;
	private JButton fireTruck;
	public static void main(String[] args) {
		new GameView();
	}

	public GameView() {
		setSize(1000, 500);
		setTitle("Alien Invasion");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		Toolkit tk = Toolkit.getDefaultToolkit();
		Dimension dim = tk.getScreenSize();
		int xPos = (dim.width/2) - (this.getWidth()/2);
		int yPos = (dim.height/2) - (this.getHeight()/2);
		this.setLocation(xPos,yPos);

		JPanel title = new JPanel();
		JLabel label1 = new JLabel("Invaded City");
		cycle = new JButton("Next Cycle");
		title.add(label1);
		title.add(cycle);
		add(title, BorderLayout.NORTH);
		
			
		buttonPanel = new JPanel();
		buttonPanel.setLayout(new GridLayout(10, 10, 2, 2));
		for (int i = 0; i < 100; i++) {
			JButton mapButton = new JButton();
			addButton(mapButton);
	}
		add(buttonPanel, BorderLayout.CENTER);	

		JPanel textPanel = new JPanel();
		textPanel.setLayout(new GridLayout(3, 1, 4, 4));
		
		
		availableUnits = new JTextArea();
		//availableUnits.setPreferredSize(new Dimension(200, 200));
		availableUnits.setEditable(false);
		availableUnits.setFont(new Font(Font.MONOSPACED, Font.PLAIN, 12));
		availableUnits.setText("availableUnits\n ");
		availableUnits.setLineWrap(true);
		availableUnits.setWrapStyleWord(true); // words not broken up
		
		unitButtonPanel = new JPanel();
		unitButtonPanel.setLayout(new GridLayout(2, 2, 2, 2));
		ambulanceUnit = new JButton("Ambulance");
		diseaseControlUnit = new JButton ("diseaseControlUnit");
		gasControlUnit = new JButton("gasControlUnit");
		fireTruck = new JButton("fireTruck");
		unitButtonPanel.add(ambulanceUnit);
		unitButtonPanel.add(diseaseControlUnit);
		unitButtonPanel.add(gasControlUnit);
		unitButtonPanel.add(fireTruck);
		availableUnits.add(unitButtonPanel);
		textPanel.add(availableUnits);

		JTextArea respondingUnits = new JTextArea(4,4);
		//respondingUnits.setPreferredSize(new Dimension(200, 200));
		respondingUnits.setEditable(false);
		respondingUnits.setFont(new Font(Font.MONOSPACED, Font.PLAIN, 12));
		respondingUnits.setText("respondingUnits\n ");
		respondingUnits.setLineWrap(true);
		respondingUnits.setWrapStyleWord(true);
		textPanel.add(respondingUnits);

		JTextArea treatingUnits = new JTextArea(4,4);
		//treatingUnits.setPreferredSize(new Dimension(200, 200));
		treatingUnits.setEditable(false);
		treatingUnits.setFont(new Font(Font.MONOSPACED, Font.PLAIN, 12));
		treatingUnits.setText("treatingUnits\n ");
		treatingUnits.setLineWrap(true);
		treatingUnits.setWrapStyleWord(true);
		textPanel.add(treatingUnits);

		add(textPanel, BorderLayout.EAST);
		
		infoPanel = new JPanel();
		infoPanel.setLayout(new BorderLayout());
		informationDisplay = new JTextArea();
		JScrollPane scrollbar1 = new JScrollPane(informationDisplay, JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED, JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED);
		scrollbar1.setSize( 20, 20 );
		informationDisplay.setPreferredSize(new Dimension(getWidth(), 200));
		informationDisplay.setEditable(false);
		informationDisplay.setFont(new Font(Font.MONOSPACED, Font.PLAIN, 12));
		informationDisplay.setText("informationDisplay\n ");
		informationDisplay.setLineWrap(true);
		informationDisplay.setWrapStyleWord(true);

		infoPanel.add(scrollbar1);
		add(infoPanel, BorderLayout.SOUTH);
		
		
		disasterPanel = new JPanel();
		disasterPanel.setLayout(new BorderLayout());
		disasterDisplay = new JTextArea();
		disasterDisplay.setPreferredSize(new Dimension(getWidth(), 200));
		disasterDisplay.setEditable(false);
		disasterDisplay.setFont(new Font(Font.MONOSPACED, Font.PLAIN, 12));
		disasterDisplay.setText("disasterDisplay\n ");
		disasterDisplay.setLineWrap(true);
		disasterDisplay.setWrapStyleWord(true);

		disasterPanel.add(disasterDisplay);
		add(disasterPanel, BorderLayout.WEST);
		
		pack();
		setVisible(true);
		
	}
	public void addButton(JButton b) {
		buttonPanel.add(b);
	}
	
