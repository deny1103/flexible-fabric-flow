
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from '@/components/ui/table';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, FileEdit, Trash2, Calendar, Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import PageTransition from '@/components/layout/PageTransition';
import { PeriodSelector } from '@/components/reports/common/PeriodSelector';

const FinishingPlanning = () => {
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Example finishing plans data
  const [finishingPlans, setFinishingPlans] = useState([
    { 
      id: 1, 
      poNumber: 'PO-2023-F01', 
      productName: 'Kemeja Print Sablon', 
      scheduledDate: '2023-05-20', 
      targetQty: 250,
      assignedTo: 'Tim Finishing A',
      status: 'Scheduled',
      priority: 'High',
      details: 'Iron, fold, tag, pack'
    },
    { 
      id: 2, 
      poNumber: 'PO-2023-F02', 
      productName: 'Kaos Polos Reguler', 
      scheduledDate: '2023-05-22', 
      targetQty: 500,
      assignedTo: 'Tim Finishing B',
      status: 'Pending',
      priority: 'Normal',
      details: 'Tag, pack only'
    },
    { 
      id: 3, 
      poNumber: 'PO-2023-F03', 
      productName: 'Jaket Hoodie', 
      scheduledDate: '2023-05-25', 
      targetQty: 150,
      assignedTo: 'Tim Finishing A',
      status: 'Scheduled',
      priority: 'Normal',
      details: 'QC check seams, iron, fold, tag, pack'
    },
  ]);

  // Form state
  const [formData, setFormData] = useState({
    poNumber: '',
    productName: '',
    scheduledDate: new Date().toISOString().split('T')[0],
    targetQty: 0,
    assignedTo: '',
    status: 'Pending',
    priority: 'Normal',
    details: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddNew = () => {
    setEditMode(false);
    setFormData({
      poNumber: '',
      productName: '',
      scheduledDate: new Date().toISOString().split('T')[0],
      targetQty: 0,
      assignedTo: '',
      status: 'Pending',
      priority: 'Normal',
      details: ''
    });
    setDialogOpen(true);
  };

  const handleEdit = (item) => {
    setEditMode(true);
    setSelectedItem(item);
    setFormData({
      poNumber: item.poNumber,
      productName: item.productName,
      scheduledDate: item.scheduledDate,
      targetQty: item.targetQty,
      assignedTo: item.assignedTo,
      status: item.status,
      priority: item.priority,
      details: item.details
    });
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    setFinishingPlans(finishingPlans.filter(plan => plan.id !== id));
    toast({
      title: "Perencanaan Dihapus",
      description: "Data perencanaan finishing berhasil dihapus",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode && selectedItem) {
      // Update existing plan
      setFinishingPlans(finishingPlans.map(plan => 
        plan.id === selectedItem.id ? 
        { ...plan, ...formData } : 
        plan
      ));
      toast({
        title: "Perencanaan Diperbarui",
        description: "Data perencanaan finishing berhasil diperbarui",
      });
    } else {
      // Add new plan
      const newPlan = {
        id: finishingPlans.length ? Math.max(...finishingPlans.map(p => p.id)) + 1 : 1,
        ...formData
      };
      setFinishingPlans([...finishingPlans, newPlan]);
      toast({
        title: "Perencanaan Ditambahkan",
        description: "Data perencanaan finishing berhasil ditambahkan",
      });
    }
    
    setDialogOpen(false);
  };

  const handleApplyFilter = () => {
    toast({
      title: "Filter Diterapkan",
      description: `Menampilkan data dari ${startDate} hingga ${endDate}`,
    });
  };

  const filteredPlans = finishingPlans.filter(plan => 
    plan.poNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plan.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plan.assignedTo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="flex flex-col p-6 space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Perencanaan Finishing</h1>
          <p className="text-muted-foreground mt-1">
            Perencanaan dan persiapan proses finishing garmen
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari rencana finishing..."
                className="pl-8 w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <PeriodSelector
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
              onApplyFilter={handleApplyFilter}
            />
          </div>
          <Button onClick={handleAddNew}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Tambah Perencanaan
          </Button>
        </div>

        {/* Main content */}
        <Card>
          <CardHeader>
            <CardTitle>Daftar Rencana Finishing</CardTitle>
            <CardDescription>
              Jadwal dan alokasi proses finishing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>No. PO</TableHead>
                  <TableHead>Produk</TableHead>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>Target Qty</TableHead>
                  <TableHead>Tim</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Prioritas</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPlans.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-6">
                      Tidak ada data perencanaan finishing
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredPlans.map((plan) => (
                    <TableRow key={plan.id}>
                      <TableCell className="font-medium">{plan.poNumber}</TableCell>
                      <TableCell>{plan.productName}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                          {plan.scheduledDate}
                        </div>
                      </TableCell>
                      <TableCell>{plan.targetQty} pcs</TableCell>
                      <TableCell>{plan.assignedTo}</TableCell>
                      <TableCell>
                        <Badge variant={plan.status === 'Scheduled' ? 'outline' : 'secondary'}>
                          {plan.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={plan.priority === 'High' ? 'destructive' : 'outline'}>
                          {plan.priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleEdit(plan)}
                          >
                            <FileEdit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline" 
                            size="icon"
                            onClick={() => handleDelete(plan.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Detail Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sumber Daya Finishing</CardTitle>
              <CardDescription>Ketersediaan Alat dan Tenaga Kerja</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span>Setrika Uap</span>
                  <Badge variant="outline">8 unit</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span>Mesin Tag</span>
                  <Badge variant="outline">3 unit</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span>Operator Finishing</span>
                  <Badge variant="outline">12 orang</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span>QC Finishing</span>
                  <Badge variant="outline">4 orang</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Material Finishing</CardTitle>
              <CardDescription>Ketersediaan Bahan Pendukung</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span>Label/Tag</span>
                  <Badge variant="success">Tersedia</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span>Hang Tag</span>
                  <Badge variant="success">Tersedia</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span>Kemasan Plastik</span>
                  <Badge variant="success">Tersedia</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span>Karton Box</span>
                  <Badge variant="warning">Menipis</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistik Finishing</CardTitle>
              <CardDescription>Metrik Produktivitas Finishing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span>Target Mingguan</span>
                  <Badge variant="outline">1,500 pcs</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span>Progress</span>
                  <Badge variant="outline">60%</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span>Lead Time</span>
                  <Badge variant="outline">2-3 hari</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-md">
                  <span>Kapasitas Harian</span>
                  <Badge variant="outline">300 pcs/hari</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add/Edit Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{editMode ? 'Edit Perencanaan Finishing' : 'Tambah Perencanaan Finishing'}</DialogTitle>
              <DialogDescription>
                {editMode 
                  ? 'Perbarui informasi perencanaan finishing yang ada' 
                  : 'Tambahkan perencanaan finishing baru ke dalam sistem'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="poNumber" className="text-right">
                    No. PO
                  </Label>
                  <Input
                    id="poNumber"
                    name="poNumber"
                    value={formData.poNumber}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="productName" className="text-right">
                    Produk
                  </Label>
                  <Input
                    id="productName"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="scheduledDate" className="text-right">
                    Tanggal
                  </Label>
                  <Input
                    id="scheduledDate"
                    name="scheduledDate"
                    type="date"
                    value={formData.scheduledDate}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="targetQty" className="text-right">
                    Target Qty
                  </Label>
                  <Input
                    id="targetQty"
                    name="targetQty"
                    type="number"
                    value={formData.targetQty}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="assignedTo" className="text-right">
                    Tim
                  </Label>
                  <Input
                    id="assignedTo"
                    name="assignedTo"
                    value={formData.assignedTo}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => handleSelectChange('status', value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Pilih status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Scheduled">Scheduled</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="priority" className="text-right">
                    Prioritas
                  </Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) => handleSelectChange('priority', value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Pilih prioritas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Normal">Normal</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="details" className="text-right">
                    Detail
                  </Label>
                  <Input
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">
                  {editMode ? 'Perbarui' : 'Tambahkan'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default FinishingPlanning;
