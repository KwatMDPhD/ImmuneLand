class CytoscapeHandler {
    constructor(element) {
        this.element = element;
        this.cy = null;
        this.init();
    }

    init() {
        this.cy = cytoscape({
            container: this.element,
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': '#666',
                        'label': 'data(id)'
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 3,
                        'line-color': '#ccc',
                        'target-arrow-color': '#ccc',
                        'target-arrow-shape': 'triangle'
                    }
                }
            ],
            elements: {
                nodes: [],
                edges: []
            }
        });
    }

    load(data) {
        this.cy.json({ elements: data });
        this.cy.layout({ name: 'preset' });
        this.cy.center();
    }

    downloadImage() {
        var png = this.cy.png({
            full: true,
            scale: 2,
            bg: '#fff'
        });
        saveAs(png, "/var/folders/mg/30npdf0s1z36txb2qvgylrzh0000gn/T/OnePiece.test/plot.png")   
    }
}